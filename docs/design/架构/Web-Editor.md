# Web-Editor
## 前言

好久都没写博客了，这两天稍微空闲些打算找个技术专题来写一些东西。本想写写最近非常火的 Turbopack，但考虑到没有深入的研究其运行原理，如果要写可能就要是流于表面讲讲用法，感觉价值也不是很高，故此还是选了之前预研过的在线编辑器。

目前社区中一些开源的框架在部署文档时为方便开发者快速了解使用，都会实现一套自己的在线编辑器。如
* [omi-Playground](https://omi.cdn-go.cn/play/latest/index.html) 
* [typescript-Play](https://www.typescriptlang.org/play) 
* [vue-Playground](https://sfc.vuejs.org/) 
* [掘金-Code](https://code.juejin.cn/) 

第一次体验这种功能时挺新奇，浏览器端居然可以直接运行 typescript、less、scss 等代码，还可以有自己的独立的运行时环境，最重要的是沙箱环境中可以有自己的依赖项（沙箱中执行代码时可以自动加载对应的依赖，如加载 vue、react 这种运行时依赖）。

后续也陆续调研了此类工具的一些架构，基于这些理论架构花费了几天的时间简单实现了一套 WebComponent 技术栈的在线编辑器，感兴趣的可以 [在线体验， 浏览器代开奥](https://cdn.canyuegongzi.xyz/wu-code-playground/playground-2022-10-30.html) 。

既然专题已定，那说干就干，先做一个基本的架构设计。

## 架构设计

既然要做在线的编译器，那首先得支持编辑代码，其次得有一个能独立运行的沙箱环境，最后就是需要具备代码的编译能力（浏览器不支持直接执行 typescript、less 此类的代码）。

<img src="https://qiniu.canyuegongzi.xyz/editor-fam.png" class="medium-zoom medium-zoom-image">

基于设想做了一个简单的架构，架构基于浏览器以及 WebWorker 环境，Compiler 是核心枢纽负责三方通信，有了基本的架构设计，后续开始针对每个模块进行技术选型以及开发。

## 模块设计

### 编辑器

Web 编辑器是前端领域中算是比较深入的一个领域了，常见的 Md 编辑器、富文本编辑器等，从能力层来说，任何具备输入能力的控件都能承担架构中 Editor 的角色，但考虑到用户体验，如代码智能提示、代码格式美化、主题色等，故此还是选一款成熟的编辑器。

目前社区中也有很多优秀代码编辑器，诸如，
* [codemirror](https://github.com/codemirror/codemirror5) 
* [monaco-editor](https://github.com/microsoft/monaco-editor) 
* [vue-codemirror](https://github.com/surmon-china/vue-codemirror) 

codemirror是一块比较老牌的插件，功能非常丰富，但工程化集成稍微困难些，因此方案中未采用该插件，故此此处不再赘述演示，感兴趣的可以移步去官网瞅瞅。

此方案中选用大大名顶顶的 monaco-editor 的编辑器，monaco-editor 是一个浏览器端的代码编辑器库，同时它也是 VS Code 所使用的编辑器。monaco-editor 可以看作是一个编辑器控件，只提供了基础的编辑器与语言相关的接口，可以被用于任何基于 Web 技术构建的项目中，而 VS Code 包含了文件管理、版本控制、插件等功能，是一款桌面软件。monaco-editor 的 GitHub 仓库中不包含任何实际功能代码，因为其源代码与 VS Code 在同一个仓库，只是在版本发布时会构建出独立的编辑器代码。目前社区中对于集成 monaco-editor 的方案比较多，此处大致做一个方案对比。

#### monaco-editor-webpack-plugin

**插件安装**

[monaco-editor-webpack-plugin](https://www.npmjs.com/package/monaco-editor-webpack-plugin) 是一个基于 webpack 的集成方案，周下载量大致 204k 左右，此处拷贝了下官网的集成代码。

```
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [new MonacoWebpackPlugin()]
};
```

**实例化**

```ts
import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

monaco.editor.create(document.getElementById('container'), {
	value: 'console.log("Hello, world")',
	language: 'javascript'
});
```

#### @monaco-editor/loader

monaco-editor-webpack-plugin 虽好，但限制了工具链只能 webpack 使用，通过开源社区了解到 [@monaco-editor/loader](https://www.npmjs.com/package/@monaco-editor/loader) ，周下载量大致 224k 左右， 用官网的描述就是

> The utility to easy setup monaco-editor into your browser。Configure and download monaco sources via its loader script, without needing to use webpack's (or any other module bundler's) configuration files

**实例化**

```ts
import loader from '@monaco-editor/loader';

loader.init().then(monaco => {
  monaco.editor.create(document.querySelector("#dom"), {
    value: '// some comment',
    language: 'javascript',
  });
});
```

#### @monaco-editor/react

@monaco-editor/loader 方案很优秀，但货比三家还是调研了另外一个方案，[@monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react) ，周下载量大致 219k 左右，是一款基于 react 的组件。

> Monaco Editor for React · use the monaco-editor in any React application without needing to use webpack (or rollup/parcel/etc) configuration files / plugins

**实例化**

```tsx
import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function App() {
  return (
   <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

**Editor 的实现最后使用了 monaco-editor + @monaco-editor/loader 的方案，封装了一个基于 WebComponent 的插件：[wu-code-monaco-editor](https://docs.wu-component.com/component-plus/Complex/CodeEditor.html) 。**

### 沙箱环境

因编辑器输入代码的不可信任，所以需要一个沙箱环境来执行代码, 防止程序访问/影响主页面。

> 在计算机安全中，沙箱（Sandbox）是一种用于隔离正在运行程序的安全机制，通常用于执行未经测试或不受信任的程序或代码，它会为待执行的程序创建一个独立的执行环境，内部程序的执行不会影响到外部程序的运行。

该方案中选用了最传统的 Iframe 方案，毕竟它的兼容性最好，功能最完善（沙箱做的最彻底，js 作用域、css 隔离等），但此处还是列举了几个社区中其他的沙箱方案。

#### Proxy Sandbox

可以通过代理 Proxy 实现对象的劫持， 通过 window 对象的修改进行记录，在卸载时删除这些记录，在应用再次激活时恢复这些记录，来达到模拟沙箱环境的目的。此处贴了一份社区中的实现代码，可以略作研习。

```ts
// 修改window属性的公共方法
const updateHostProp = (prop: any, value, isDel?) => {
    if (value === undefined || isDel) {
        delete window[prop];
    } else {
        window[prop] = value;
    }
};

class ProxySandbox {
    private currentUpdatedPropsValueMap = new Map()
    private modifiedPropsMap = new Map()
    private addedPropsMap = new Map()
    public name: string = "";
    public proxy: any;

    /**
     * 激活沙箱
     */
    public active() {
        // 根据记录还原沙箱
        this.currentUpdatedPropsValueMap.forEach((v, p) => updateHostProp(p, v));
    }

    /**
     * 关闭沙箱
     */
    public inactive() {
        // 1 将沙箱期间修改的属性还原为原先的属性
        this.modifiedPropsMap.forEach((v, p) => updateHostProp(p, v));
        // 2 将沙箱期间新增的全局变量消除
        this.addedPropsMap.forEach((_, p) => updateHostProp(p, undefined, true));
    }

    constructor(name) {
        this.name = name;
        this.proxy = null;
        // 存放新增的全局变量
        this.addedPropsMap  = new Map();
        // 存放沙箱期间更新的全局变量
        this.modifiedPropsMap = new Map();
        // 存在新增和修改的全局变量，在沙箱激活的时候使用
        this.currentUpdatedPropsValueMap = new Map();

        const { addedPropsMap, currentUpdatedPropsValueMap, modifiedPropsMap } = this;
        const fakeWindow = Object.create(null);
        const proxy = new Proxy(fakeWindow, {
            set(target, prop, value) {
                if (!window.hasOwnProperty(prop)) {
                    // 如果window上没有的属性，记录到新增属性里
                    addedPropsMap.set(prop, value);
                } else if (!modifiedPropsMap.has(prop)) {
                    // 如果当前window对象有该属性，且未更新过，则记录该属性在window上的初始值
                    const originalValue = window[prop];
                    modifiedPropsMap.set(prop, originalValue);
                }
                // 记录修改属性以及修改后的值
                currentUpdatedPropsValueMap.set(prop, value);
                // 设置值到全局window上
                updateHostProp(prop, value);
                return true;
            },
            get(target, prop) {
                return window[prop];
            },
        });
        this.proxy = proxy;
    }
}

const newSandBox: ProxySandbox = new ProxySandbox('代理沙箱');
const proxyWindow = newSandBox.proxy;
proxyWindow.a = '1';
console.log('开启沙箱：', proxyWindow.a, window.a);
newSandBox.inactive(); //失活沙箱
console.log('失活沙箱：', proxyWindow.a, window.a);
newSandBox.active(); //失活沙箱
console.log('重新激活沙箱：', proxyWindow.a, window.a);

```

以上代码实现了基础版的沙箱， 通过 active 方法开始沙箱代理，社区中的 qiankunu 等此类的微前端架构中基本都采用了此类的设计。

#### Diff Sandbox

除 Proxy 方式外，我们可以通过 diff 的方式创建沙箱，一般作为 Proxy Sandbox 的降级方案，在应用运行的时候保存一个快照 window 对象，将当前 window 对象的全部属性都复制到快照对象上，子应用卸载的时候将 window 对象修改做个 diff，将不同的属性用个 modifyMap 保存起来，再次挂载的时候再加上这些修改的属性。

```ts
class DiffSandbox {
    public name: any;
    public modifyMap: {};
    private windowSnapshot: {};
    constructor(name) {
        this.name = name;
        this.modifyMap = {}; // 存放修改的属性
        this.windowSnapshot = {};
    }
    public active() {
        // 缓存active状态的沙箱
        this.windowSnapshot = {};
        for (const item in window) {
            this.windowSnapshot[item] = window[item];
        }

        Object.keys(this.modifyMap).forEach(p => {
            window[p] = this.modifyMap[p];
        });

    }

    public inactive() {
        for (const item in window) {
            if (this.windowSnapshot[item] !== window[item]) {
                // 记录变更
                this.modifyMap[item] = window[item];
                // 还原window
                window[item] = this.windowSnapshot[item];
            }
        }
    }
}
const diffSandbox = new DiffSandbox('diff沙箱');
diffSandbox.active();  // 激活沙箱
window.a = '1';
console.log('开启沙箱：', window.a);
diffSandbox.inactive(); //失活沙箱
console.log('失活沙箱：', window.a);
diffSandbox.active();   // 重新激活
console.log('再次激活', window.a);

```

#### iframe

iframe 方案是该设计中的沙箱方案，此处细细道说。

<img src="https://qiniu.canyuegongzi.xyz/%E6%B2%99%E7%AE%B1%E6%93%8D%E4%BD%9C.png" class="medium-zoom medium-zoom-image">

宿主环境中通过实例化 new ProxySandbox() 操作来创建加载 Iframe， Iframe 加载完毕后会监听来自宿主的消息，诸如执行代码、加载依赖。内部也可以通过 postMessage 向宿主环境发送消息，此逻辑参考了  [@vue/repl](https://github.com/vuejs/repl#readme)  

```ts
let uid = 1;
export class ProxySandbox {
    iframe: HTMLIFrameElement
    handlers: Record<string, Function>
    pending_cmds: Map<
        number,
        { resolve: (value: unknown) => void; reject: (reason?: any) => void }
        >
    handle_event: (e: any) => void

    constructor(iframe: HTMLIFrameElement, handlers: Record<string, Function>) {
        this.iframe = iframe;
        this.handlers = handlers;

        this.pending_cmds = new Map();

        this.handle_event = (e) => this.handle_repl_message(e);
        window.addEventListener('message', this.handle_event, false);
    }

    destroy() {
        window.removeEventListener('message', this.handle_event);
    }

    iframe_command(action: string, args: any) {
        return new Promise((resolve, reject) => {
            const cmd_id = uid++;

            this.pending_cmds.set(cmd_id, { resolve, reject });

            this.iframe.contentWindow!.postMessage({ action, cmd_id, args }, '*');
        });
    }

    handle_command_message(cmd_data: any) {
        const action = cmd_data.action;
        const id = cmd_data.cmd_id;
        const handler = this.pending_cmds.get(id);

        if (handler) {
            this.pending_cmds.delete(id);
            if (action === 'cmd_error') {
                const { message, stack } = cmd_data;
                const e = new Error(message);
                e.stack = stack;
                handler.reject(e);
            }

            if (action === 'cmd_ok') {
                handler.resolve(cmd_data.args);
            }
        } else if (action !== 'cmd_error' && action !== 'cmd_ok') {
            console.error('command not found', id, cmd_data, [
                ...this.pending_cmds.keys()
            ]);
        }
    }

    handle_repl_message(event: any) {
        if (event.source !== this.iframe.contentWindow) return;

        const { action, args } = event.data;
        this.handlers.on_default_event(event);
        switch (action) {
            case 'cmd_error':
            case 'cmd_ok':
                return this.handle_command_message(event.data);
            case 'fetch_progress':
                return this.handlers.on_fetch_progress(args.remaining);
            case 'error':
                return this.handlers.on_error(event.data);
            case 'unhandledrejection':
                return this.handlers.on_unhandled_rejection(event.data);
            case 'console':
                return this.handlers.on_console(event.data);
            case 'console_group':
                return this.handlers.on_console_group(event.data);
            case 'console_group_collapsed':
                return this.handlers.on_console_group_collapsed(event.data);
            case 'console_group_end':
                return this.handlers.on_console_group_end(event.data);
        }
    }

    eval(script: string | string[]) {
        return this.iframe_command('eval', { script });
    }

    handle_links() {
        return this.iframe_command('catch_clicks', {});
    }

    load_depend(options: Record<any, any>) {
        return this.iframe_command('load_dependencies', options);
    }
}
```

### 在线编译

Editor 和 Sandbox 方案既定，最后就是代码的编译问题，此方案中仅涉及 TypeScript 的编译。

monaco-editor 提供了 Worker 编译代码的能力，使用起来也是非常方便，读取到编辑器中输入的代码后直接输入到 Worker 中，等待编译完成再调用上章中沙箱提供的 eval 的接口送入沙箱中即可。

```ts

export const compileTS = async (uri: InstanceType<typeof monaco.Uri>) => {
    // const tsWorker = await monaco.languages.typescript.getTypeScriptWorker();
    const monaco = window.monaco;
    // 读取编译子线程
    const tsWorker = await monaco.languages.typescript.getTypeScriptWorker();
    const client = await tsWorker(uri);
    const result = await client.getEmitOutput(uri.toString());
    const files = result.outputFiles[0];
    return files.text;
};

export class WuCodePlayground extends WuComponent {
    /// .....code
    constructor() {
        super();
    }
    
    /**
     * 核心逻辑， 读取输入的代码，执行 compileTS 编译
     */
    public async runCode() {
        const editor = this.editorContainer.editor;
        const tsJs: string = await compileTS(editor.getModel("typescript").uri);
        this.previewContainer.runCode('ts', tsJs);

    }
    /// .....code
}

```

至于其他诸如 less, scss 等的编译问题社区中也有成熟的方案：

* [less](https://lesscss.org/)
* [sass](http://sass.js.org/)

## 思考

时间太晚了写不动了，此方案在实时过程中有很多的细节问题后续抽空在记录吧，如沙箱中通过如何通过 import-maps 加载运行时依赖、沙箱与宿主间通信如何保证稳定、以及 WebComponent 不能重复定义等问题。

* [感兴趣的可以移步到这里参阅源码](https://github.com/wu-component/web-component-plus/tree/master/component/packages/wu-code-playground/src)
* [组件](https://docs.wu-component.com/component-plus/Complex/CodeEditor.html)

## 参考资料

* [@vue/repl](https://github.com/vuejs/repl#readme)  
* [monaco-editor](https://microsoft.github.io/monaco-editor/)  
* [writing-a-javascript-framework-sandboxed-code-evaluation](https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/)  
* [create-a-custom-web-editor-using-typescript-react-antlr-and-monaco-editor](https://betterprogramming.pub/create-a-custom-web-editor-using-typescript-react-antlr-and-monaco-editor-part-1-2f710c69c18c)
* [To create a lightweight WebIDE, reading this article is enough](https://segmentfault.com/a/1190000041686221/en)
* [import-maps](https://html.spec.whatwg.org/multipage/webappapis.html#import-maps)
