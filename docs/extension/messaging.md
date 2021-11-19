## 消息传递

由于内容脚本在网页而不是扩展程序的上下文中运行，因此它们通常需要某种与扩展程序其余部分进行通信的方式。例如，RSS 阅读器扩展程序可以使用内容脚本来检测页面上 RSS 摘要的存在，然后通知后台页面以显示该页面的操作图标。

扩展及其内容脚本之间的通信使用消息传递来实现。任何一方都可以监听从另一端发送的消息，并在同一通道上进行响应。消息可以包含任何有效的 JSON 对象（空，布尔值，数字，字符串，数组或对象）。有一个简单的 API 可以处理一次性请求，而一个更复杂的 API 则可以使您拥有长连接，以便与共享上下文交换多条消息。如果您知道扩展名，也可以将消息发送到另一个扩展，该 ID 在[交叉扩展消息](https://developer.chrome.com/extensions/messaging#external)部分中进行了介绍。

### 简单的一次性请求

如果只需要向扩展的另一部分发送一条消息（并有选择地返回响应），则应使用简化的runtime.sendMessage 或tabs.sendMessage。这样，您就可以从内容脚本向扩展发送一次 JSON 序列化的消息，反之亦然。可选的回调参数允许您从另一端处理响应（如果有）。

从内容脚本发送请求如下所示：

``` js
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
```

从扩展向内容脚本发送请求看起来非常相似，不同之处在于，您需要指定将请求发送至哪个选项卡。 本示例演示了将消息发送到所选选项卡中的内容脚本。

``` js
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
```

在接收端，您需要设置 runtime.onMessage 事件监听器以处理消息。 在内容脚本或扩展页面中，外观看起来相同。

``` js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
```

在上面的示例中，sendResponse 被同步调用。 如果要异步使用 sendResponse，请添加 return true; 到 onMessage 事件处理器。

> 注意：如果多个页面都正在监听 onMessage 事件，则只有第一个调用 sendResponse() 的用户才能成功发送响应。对该事件的所有其他响应将被忽略。


> 注意：sendResponse 回调仅在同步使用或事件处理程序返回 true 表示异步响应时才有效。如果没有处理程序返回 true 或 sendResponse 回调被垃圾回收后，则 sendMessage 回调函数将被自动调用。


### 长连接

有时对话的持续时间长于单个请求和响应，这很有用。在这种情况下，可以分别使用runtime.connect 或 tabs.connect 来打开从内容脚本到扩展页面的长生命周期通道，反之亦然。通道可以有一个名称，以便区分不同类型的连接。

一个用例可能是自动填写表格扩展。内容脚本可以为特定的登录打开扩展页面的通道，并为页面上的每个输入元素向扩展发送消息，以请求填写表单数据。共享连接允许扩展保持共享状态接收来自内容脚本的几条消息。

建立连接时，会为两端提供一个 runtime.Port 对象，该对象用于通过该连接发送和接收消息。

这是从内容脚本打开通道并发送和收听消息的方式：

``` js
var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});
```

从扩展向内容脚本发送请求看起来非常相似，不同之处在于，需要指定要连接到的选项卡。只需将以上示例中的 connect 连接替换为 tabs.connect。

为了处理接收的连接，您需要设置runtime.onConnect 事件监听器。从内容脚本或扩展页面看，它看起来是相同的。当扩展的另一部分调用 “connect()” 时，将触发此事件，以及可用于通过连接发送和接收消息的 runtime.Port 对象。 这是响应接收连接的代码：

``` js
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "knockknock");
  port.onMessage.addListener(function(msg) {
    if (msg.joke == "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer == "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});
```

#### 端口生命周期

端口被设计为扩展的不同部分之间的双向通信方法，其中（顶层）帧被视为最小部分。

调用 tabs.connect，runtime.connect 或runtime.connectNative 时，将创建一个端口。该端口可立即用于通过 postMessage 将消息发送到另一端。

如果选项卡中有多个 frame，则调用 tabs.connect会导致对 runtime.onConnect 事件的多次调用（选项卡中的每个 frame 一次）。同样，如果使用runtime.connect，则 onConnect 事件可能会被触发多次（扩展过程中的每个 frame 一次）。

您可能想知道连接何时关闭，例如，是否为每个打开的端口维护单独的状态。为此，可以侦听runtime.Port.onDisconnect 事件。当通道另一侧没有有效端口时，将触发此事件。以下会发生这种情况：

* 另一端没有用于 runtime.onConnect 的监听器。
* 包含端口的选项卡已卸载（例如，如果浏览了该选项卡）。
* 调用连接所在的 frame 已卸载。
* 接收端口（通过 runtime.onConnect）的所有frame 均已卸载。
* 另一端调用 runtime.Port.disconnect。请注意，如果连接调用在接收方的端部产生多个端口，并且在这些端口中的任何一个上调用了connect() ，则 onDisconnect 事件仅在发送方的端口上触发，而不在其他端口上触发。


### 交叉扩展消息传递

除了在扩展中的不同组件之间发送消息之外，您还可以使用消息传递 API 与其他扩展进行通信。 这使您可以提供公共 api 供其他扩展利用。

监听传入的请求和连接与内部通信类似，不同之处在于，您使用 runtime.onMessageExternal 或runtime.onConnectExternal 方法。 这是示例：

``` js
/ For simple requests:
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.id == blocklistedExtension)
      return;  // don't allow this extension access
    else if (request.getTargetData)
      sendResponse({targetData: targetData});
    else if (request.activateLasers) {
      var success = activateLasers();
      sendResponse({activateLasers: success});
    }
  });

// For long-lived connections:
chrome.runtime.onConnectExternal.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    // See other examples for sample onMessage handlers.
  });
});
```

同样，向另一扩展名发送消息类似于在扩展中发送消息。唯一的区别是必须传递要与之通信的扩展的ID。 例如：

``` js
// The ID of the extension we want to talk to.
var laserExtensionId = "abcdefghijklmnoabcdefhijklmnoabc";

// Make a simple request:
chrome.runtime.sendMessage(laserExtensionId, {getTargetData: true},
  function(response) {
    if (targetInRange(response.targetData))
      chrome.runtime.sendMessage(laserExtensionId, {activateLasers: true});
  });

// Start a long-running conversation:
var port = chrome.runtime.connect(laserExtensionId);
port.postMessage(...);
```

### 从网页发送消息

与[跨扩展消息传递](https://developer.chrome.com/extensions/messaging#external)类似，您的应用或扩展程序可以接收和响应来自常规网页的消息。 要使用此功能，必须在 manifest.json 中指定要与之通信的网站。例如：

```
"externally_connectable": {
  "matches": ["*://*.example.com/*"]
}
```

这会将消息传递 API 公开到与您指定的 URL模式匹配的任何页面。 RL模式必须至少包含二级域-即，禁止使用主机名模式，例如 “*”，“*.com”，“*.co.uk” 和 “*.appspot.com” 。在网页上，使用 runtime.sendMessage 或runtime.connect API 将消息发送到特定的应用程序或扩展。例如：

``` js
// The ID of the extension we want to talk to.
var editorExtensionId = "abcdefghijklmnoabcdefhijklmnoabc";

// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
  function(response) {
    if (!response.success)
      handleError(url);
  });
```

在应用程序或扩展中，您可以通过runtime.onMessageExternal或runtime.onConnectExternal API 监听来自网页的消息，类似于交叉扩展消息传递。只有网页可以初始化连接。 这是一个例子：

``` js
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.url == blocklistedWebsite)
      return;  // don't allow this web page access
    if (request.openUrlInEditor)
      openUrl(request.openUrlInEditor);
  });
```

### 本机消息传递

扩展程序和应用程序可以与注册为本地消息传递主机的本地应用程序交换消息。要了解有关此功能的更多信息，请参阅[本机消息传递](https://developer.chrome.com/extensions/nativeMessaging)。

### 安全注意事项

#### 内容脚本的可信度较低

内容脚本的可信度不及扩展程序后台页面（例如，恶意网页可能会感染运行内容脚本的渲染器进程）。假设来自内容脚本的消息可能是攻击者制作的，并确保验证和清除所有输入。假设发送到内容脚本的任何数据都可能泄漏到网页。限制可以由从内容脚本接收的消息触发的权限操作的范围。

#### 跨站脚本

当从内容脚本或其他扩展接收到消息时，您的脚本应注意不要成为跨站脚本的受害者。此建议适用于在扩展程序后台页面中运行的脚本以及在其他 Web 来源中运行的内容脚本。具体来说，请避免使用以下危险的API：

``` js
chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
  // WARNING! Might be evaluating an evil script!
  var resp = eval("(" + response.farewell + ")");
});
```

``` js
chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
  // WARNING! Might be injecting a malicious script!
  document.getElementById("resp").innerHTML = response.farewell;
});
```

相反，请选择不运行脚本的更安全的API：

``` js
chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
  // JSON.parse does not evaluate the attacker's scripts.
  var resp = JSON.parse(response.farewell);
});

```

``` js
chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
  // innerText does not let the attacker inject HTML elements.
  document.getElementById("resp").innerText = response.farewell;
});

```
### 例子

您可以在 [examples/api/messaging](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/messaging/) 目录中找到通过消息进行通信的简单示例。 [本机消息传递示例](https://developer.chrome.com/extensions/nativeMessaging#examples) 演示了 Chrome应用如何与本机应用通信。 有关更多示例和查看源代码的帮助，请参阅[示例](https://developer.chrome.com/extensions/samples)。





