## Install 安装

### 介绍

web-core-plus 可以看做是微型的 WebComponent 框架，与传统方式的区别在于：

* 响应式
  
        web-core-plus 内部对数据做响应式处理，配合虚拟dom实现了组件的最小化、快速的更新。
  
* 沙箱隔离
  
        基于 WebComponent 的特性， 基于 web-core-plus 的组件天然的具备 css、js 隔离。
  
* Api
  
        web-core-plus 包内部定义了 Component、Prop、Watch、Emit 等装饰器，开发者基于此类 Api, 可快速的定义组件。
  
* 开发流程
  
        web-core-plus 可使用配套的 cli 实现开发环境热更新、生产环境标准产物构建。

### 快速创建


需要提前全局安装 t-cli 脚手架，关于 t-cli 详见 [使用指南](/t-cli/安装/install) 。

```bash

t init-web-component test-web-core-component

```

### 开发构建

[脚手架工程模板使用](/t-cli/工程模板/web-core-component) 。
