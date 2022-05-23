(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1074:function(e,n,t){"use strict";t.r(n);var r=t(73),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"什么是扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是扩展"}},[e._v("#")]),e._v(" 什么是扩展")]),e._v(" "),r("p",[e._v("扩展是可定制化浏览体验的小程序，它们使用户可以根据个人需要或者偏好定制 Chrome 的功能和行为。它们基于 Web 技术（例如 HTML，JavaScript 和 CSS）构建。")]),e._v(" "),r("p",[e._v("扩展必须满足狭义定义且易于理解的"),r("a",{attrs:{href:"https://developer.chrome.com/extensions/single_purpose",target:"_blank",rel:"noopener noreferrer"}},[e._v("单一目的"),r("OutboundLink")],1),e._v("（译者注：功能简单易懂化）。一个扩展可以包括多个组件和一系列功能，只要所有的内容都有助于实现共同的目标。")]),e._v(" "),r("p",[e._v("用户交互界面应尽量小且有意图。他们的范围从简单的图标，如右侧显示的 "),r("a",{attrs:{href:"https://developer.chrome.com/samples#google-mail-checker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Mail Checker 扩展"),r("OutboundLink")],1),e._v("， 到"),r("a",{attrs:{href:"https://developer.chrome.com/extensions/override",target:"_blank",rel:"noopener noreferrer"}},[e._v("覆盖"),r("OutboundLink")],1),e._v("整个页面。"),r("img",{attrs:{src:t(863),alt:"gmail-smal"}})]),e._v(" "),r("p",[e._v("扩展文件压缩到单个 .crx 包中，用户可以下载并安装。这意味着扩展与普通的 Web 应用程序不同，它不依赖于 Web 上的内容。")]),e._v(" "),r("p",[e._v("扩展程序通过 Chrome "),r("a",{attrs:{href:"https://chrome.google.com/webstore/developer/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发者管理后台"),r("OutboundLink")],1),e._v(" 分发，并发布到 "),r("a",{attrs:{href:"http://chrome.google.com/webstore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome 网上应用商店"),r("OutboundLink")],1),e._v("。有关更多信息，请参阅"),r("a",{attrs:{href:"https://developer.chrome.com/webstore",target:"_blank",rel:"noopener noreferrer"}},[e._v("商店开发人员文档"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"hello-扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hello-扩展"}},[e._v("#")]),e._v(" Hello 扩展")]),e._v(" "),r("p",[e._v("通过这个快速的 Hello 扩展示例，让大家对扩展有一点了解。 首先创建一个新目录来放置扩展的文件，或者从"),r("a",{attrs:{href:"https://developer.chrome.com/extensions/samples#search:hello",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例页面"),r("OutboundLink")],1),e._v("下载它们。")]),e._v(" "),r("p",[e._v("接下来，添加一个名为 manifest.json 的文件，并包含以下代码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "name": "Hello Extensions",\n    "description" : "Base Level Extension",\n    "version": "1.0",\n    "manifest_version": 2\n  }  \n  \n')])])]),r("p",[e._v("每个扩展都需要一个 mainfest，尽管大多数扩展的 mainfest 没有多大作用。为了快速入门，该扩展程序在 "),r("RouterLink",{attrs:{to:"/extension/browser_action.html"}},[e._v("browser_action")]),e._v(" 字段下声明了一个弹出文件和图标：")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('  {\n    "name": "Hello Extensions",\n    "description" : "Base Level Extension",\n    "version": "1.0",\n    "manifest_version": 2,\n    "browser_action": {\n      "default_popup": "hello.html",\n      "default_icon": "hello_extensions.png"\n    }\n  }\n')])])]),r("p",[e._v("下载 "),r("a",{attrs:{href:".assets/hello_extensions.png"}},[e._v("hello_extensions.png")]),e._v(" 然后创建一个文件名：hello.html")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" <html>\n    <body>\n      <h1>Hello Extensions</h1>\n    </body>\n  </html>\n\n")])])]),r("p",[e._v("单击该图标后，扩展会显示 hello.html。 下一步是在 manifest.json 中包含一个启用键盘快捷键的命令。 此步骤很有趣，但不是必需的：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(' {\n    "name": "Hello Extensions",\n    "description" : "Base Level Extension",\n    "version": "1.0",\n    "manifest_version": 2,\n    "browser_action": {\n      "default_popup": "hello.html",\n      "default_icon": "hello_extensions.png"\n    },\n    "commands": {\n      "_execute_browser_action": {\n        "suggested_key": {\n          "default": "Ctrl+Shift+F",\n          "mac": "MacCtrl+Shift+F"\n        },\n        "description": "Opens hello.html"\n      }\n    }\n  \n  }\n')])])]),r("p",[e._v("最后一步是在本地计算机上安装扩展。")]),e._v(" "),r("ol",[r("li",[e._v("在浏览器地址栏中输入 chrome://extensions。 你还可以通过点击功能框右上角的 Chrome 菜单，将鼠标悬停在 "),r("strong",[e._v("更多工具")]),e._v(" 上，然后选择 "),r("strong",[e._v("扩展程序")]),e._v(" ，以访问此页面。")]),e._v(" "),r("li",[e._v("选中"),r("strong",[e._v("开发人员模式")]),e._v("旁边的框。")]),e._v(" "),r("li",[e._v("单击"),r("strong",[e._v("加载解压缩的扩展名")]),e._v("，然后选择"),r("strong",[e._v("Hello扩展")]),e._v("的目录。")])]),e._v(" "),r("p",[e._v("恭喜你！ 现在，你可以通过单击 hello_world.png 图标或按键盘上的 "),r("strong",[e._v("Ctrl+Shift+F")]),e._v(" 来使用基于弹出窗口的扩展。")]),e._v(" "),r("hr")])}),[],!1,null,null,null);n.default=a.exports},863:function(e,n){e.exports="data:image/png;base64,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"}}]);