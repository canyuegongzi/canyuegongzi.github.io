(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1234:function(t,a,s){"use strict";s.r(a);var n=s(73),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前端性能优化总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化总结"}},[t._v("#")]),t._v(" 前端性能优化总结")]),t._v(" "),n("h2",{attrs:{id:"减少-http-请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#减少-http-请求"}},[t._v("#")]),t._v(" 减少 HTTP 请求")]),t._v(" "),n("p",[t._v("一个完整的 HTTP 请求需要经历 DNS 查找，TCP 握手，浏览器发出 HTTP 请求，服务器接收请求，服务器处理请求并发回响应，浏览器接收响应等过程。")]),t._v(" "),n("p",[t._v("接下来看一个具体的例子帮助理解 HTTP ：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(968),alt:""}})]),t._v(" "),n("p",[t._v("这是一个 HTTP 请求，请求的文件大小为 28.4KB。")]),t._v(" "),n("p",[t._v("名词解释：")]),t._v(" "),n("ul",[n("li",[t._v("Queueing: 在请求队列中的时间。")]),t._v(" "),n("li",[t._v("Stalled: 从TCP 连接建立完成，到真正可以传输数据之间的时间差，此时间包括代理协商时间。")]),t._v(" "),n("li",[t._v("Proxy negotiation: 与代理服务器连接进行协商所花费的时间。")]),t._v(" "),n("li",[t._v("DNS Lookup: 执行DNS查找所花费的时间，页面上的每个不同的域都需要进行DNS查找。")]),t._v(" "),n("li",[t._v("Initial Connection / Connecting: 建立连接所花费的时间，包括TCP握手/重试和协商SSL。")]),t._v(" "),n("li",[t._v("SSL: 完成SSL握手所花费的时间。")]),t._v(" "),n("li",[t._v("Request sent: 发出网络请求所花费的时间，通常为一毫秒的时间。")]),t._v(" "),n("li",[t._v("Waiting(TFFB): TFFB 是发出页面请求到接收到应答数据第一个字节的时间总和，它包含了 DNS 解析时间、 TCP 连接时间、发送 HTTP 请求时间和获得响应消息第一个字节的时间。")]),t._v(" "),n("li",[t._v("Content Download: 接收响应数据所花费的时间。")])]),t._v(" "),n("p",[t._v("从这个例子可以看出，真正下载数据的时间占比为 "),n("code",[t._v("13.05 / 204.16 = 6.39%")]),t._v("，文件越小，这个比例越小，文件越大，比例就越高。这就是为什么要建议将多个小文件合并为一个大文件，从而减少 HTTP 请求次数的原因。")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/network/understanding-resource-timing",target:"_blank",rel:"noopener noreferrer"}},[t._v("understanding-resource-timing"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"使用-http2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-http2"}},[t._v("#")]),t._v(" 使用 HTTP2")]),t._v(" "),n("p",[t._v("HTTP2 相比 HTTP1.1 有如下几个优点：")]),t._v(" "),n("h2",{attrs:{id:"使用服务端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用服务端渲染"}},[t._v("#")]),t._v(" 使用服务端渲染")]),t._v(" "),n("p",[t._v("客户端渲染(SPA): 获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。")]),t._v(" "),n("p",[t._v("服务端渲染(SSR)：服务端返回 HTML 文件，客户端只需解析 HTML。")]),t._v(" "),n("ul",[n("li",[t._v("优点：首屏渲染快，SEO 好。")]),t._v(" "),n("li",[t._v("缺点：配置麻烦，增加了服务器的计算压力。")])]),t._v(" "),n("h2",{attrs:{id:"静态资源使用-cdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态资源使用-cdn"}},[t._v("#")]),t._v(" 静态资源使用 CDN")]),t._v(" "),n("p",[t._v("内容分发网络（CDN）是一组分布在多个不同地理位置的 Web 服务器。我们都知道，当服务器离用户越远时，延迟越高。CDN 就是为了解决这一问题，在多个位置部署服务器，让用户离服务器更近，从而缩短请求时间。")]),t._v(" "),n("p",[n("strong",[t._v("CDN 原理")])]),t._v(" "),n("p",[t._v("当用户访问一个网站时，如果没有 CDN，过程是这样的：")]),t._v(" "),n("ol",[n("li",[t._v("浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。")]),t._v(" "),n("li",[t._v("本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到网站服务器的 IP 地址。")]),t._v(" "),n("li",[t._v("本地 DNS 将 IP 地址发回给浏览器，浏览器向网站服务器 IP 地址发出请求并得到资源。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(969),alt:""}})]),t._v(" "),n("p",[t._v("如果用户访问的网站部署了 CDN，过程是这样的：")]),t._v(" "),n("ol",[n("li",[t._v("浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。")]),t._v(" "),n("li",[t._v("本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到全局负载均衡系统（GSLB）的 IP 地址。")]),t._v(" "),n("li",[t._v("本地 DNS 再向 GSLB 发出请求，GSLB 的主要功能是根据本地 DNS 的 IP 地址判断用户的位置，筛选出距离用户较近的本地负载均衡系统（SLB），并将4. 该 SLB 的 IP 地址作为结果返回给本地 DNS。")]),t._v(" "),n("li",[t._v("本地 DNS 将 SLB 的 IP 地址发回给浏览器，浏览器向 SLB 发出请求。")]),t._v(" "),n("li",[t._v("SLB 根据浏览器请求的资源和地址，选出最优的缓存服务器发回给浏览器。")]),t._v(" "),n("li",[t._v("浏览器再根据 SLB 发回的地址重定向到缓存服务器。")]),t._v(" "),n("li",[t._v("如果缓存服务器有浏览器需要的资源，就将资源发回给浏览器。如果没有，就向源服务器请求资源，再发给浏览器并缓存在本地。")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(970),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"将-css-放在文件头部-javascript-文件放在底部"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将-css-放在文件头部-javascript-文件放在底部"}},[t._v("#")]),t._v(" 将 CSS 放在文件头部，JavaScript 文件放在底部")]),t._v(" "),n("p",[t._v("所有放在 head 标签里的 CSS 和 JS 文件都会堵塞渲染。如果这些 CSS 和 JS 需要加载和解析很久的话，那么页面就空白了。所以 JS 文件要放在底部，等 HTML 解析完了再加载 JS 文件。")]),t._v(" "),n("p",[t._v("那为什么 CSS 文件还要放在头部呢？")]),t._v(" "),n("p",[t._v("因为先加载 HTML 再加载 CSS，会让用户第一时间看到的页面是没有样式的、“丑陋”的，为了避免这种情况发生，就要将 CSS 文件放在头部了。")]),t._v(" "),n("p",[t._v("另外，JS 文件也不是不可以放在头部，只要给 "),n("code",[t._v("script")]),t._v(" 标签加上 "),n("code",[t._v("defer")]),t._v(" 属性就可以了，异步下载，延迟执行。")]),t._v(" "),n("p",[t._v("参考："),n("a",{attrs:{href:"./6"}},[t._v("script的加载和执行")])]),t._v(" "),n("h2",{attrs:{id:"善用缓存-不重复加载相同的资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#善用缓存-不重复加载相同的资源"}},[t._v("#")]),t._v(" 善用缓存，不重复加载相同的资源")]),t._v(" "),n("p",[t._v("为了避免用户每次访问网站都得请求文件，我们可以通过添加 Expires 或 max-age 来控制这一行为。Expires 设置了一个时间，只要在这个时间之前，浏览器都不会请求文件，而是直接使用缓存。而 max-age 是一个相对时间，建议使用 max-age 代替 Expires 。")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/woai3c/node-blog/blob/master/doc/node-blog7.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack + express 实现文件精确缓存"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.webpackjs.com/guides/caching/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 缓存"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.zhihu.com/question/20790576/answer/32602154",target:"_blank",rel:"noopener noreferrer"}},[t._v("大公司里怎样开发和部署前端代码？"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"压缩文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#压缩文件"}},[t._v("#")]),t._v(" 压缩文件")]),t._v(" "),n("p",[t._v("压缩文件可以减少文件下载时间，让用户体验性更好。\n得益于 webpack 和 node 的发展，现在压缩文件已经非常方便了。\n在 webpack 可以使用如下插件进行压缩：")]),t._v(" "),n("ul",[n("li",[t._v("JavaScript：UglifyPlugin")]),t._v(" "),n("li",[t._v("CSS ：MiniCssExtractPlugin")]),t._v(" "),n("li",[t._v("HTML：HtmlWebpackPlugin")])]),t._v(" "),n("blockquote",[n("p",[t._v("其实，我们还可以做得更好。那就是使用 gzip 压缩。可以通过向 HTTP 请求头中的 Accept-Encoding 头添加 gzip 标识来开启这一功能。当然，服务器也得支持这一功能。\ngzip 是目前最流行和最有效的压缩方法。举个例子，我用 Vue 开发的项目构建后生成的 app.js 文件大小为 1.4MB，使用 gzip 压缩后只有 573KB，体积减少了将近 60%。")])]),t._v(" "),n("p",[t._v("附上 webpack 和 node 配置 gzip 的使用方法。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm install compression"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\nnpm install compression\n")])])]),n("p",[t._v("webpack 配置")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("node 配置")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" compression "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在其他中间件前使用")]),t._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compression")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"压缩图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#压缩图片"}},[t._v("#")]),t._v(" 压缩图片")]),t._v(" "),n("p",[t._v("压缩方法有两种，一是通过 "),n("code",[t._v("webpack")]),t._v(" 插件 "),n("code",[t._v("image-webpack-loader")]),t._v("，二是通过在线网站进行压缩。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" image"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader\n")])])]),n("p",[t._v("Webpack 配置如下")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(png|jpe?g|gif|svg)(\\?.*)?$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 图片大小小于1000字节限制时会自动转成 base64 码引用*/")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assetsPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name].[hash:7].[ext]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*对图片进行压缩*/")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image-webpack-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bypassOnDebug"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"调整图片大小"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调整图片大小"}},[t._v("#")]),t._v(" 调整图片大小")]),t._v(" "),n("p",[t._v("例如，你有一个 1920 * 1080 大小的图片，用缩略图的方式展示给用户，并且当用户鼠标悬停在上面时才展示全图。如果用户从未真正将鼠标悬停在缩略图上，则浪费了下载图片的时间。")]),t._v(" "),n("p",[t._v("所以，我们可以用两张图片来实行优化。一开始，只加载缩略图，当用户悬停在图片上时，才加载大图。还有一种办法，即对大图进行延迟加载，在所有元素都加载完成后手动更改大图的 src 进行下载。")]),t._v(" "),n("h3",{attrs:{id:"尽可能利用-css3-效果代替图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尽可能利用-css3-效果代替图片"}},[t._v("#")]),t._v(" 尽可能利用 CSS3 效果代替图片")]),t._v(" "),n("p",[t._v("有很多图片使用 CSS 效果（渐变、阴影等）就能画出来，这种情况选择 CSS3 效果更好。因为代码大小通常是图片大小的几分之一甚至几十分之一。")]),t._v(" "),n("h3",{attrs:{id:"使用-webp-格式的图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-webp-格式的图片"}},[t._v("#")]),t._v(" 使用 webp 格式的图片")]),t._v(" "),n("p",[t._v("WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。")]),t._v(" "),n("p",[t._v("参考："),n("a",{attrs:{href:"https://www.zhihu.com/question/27201061",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebP 相对于 PNG、JPG 有什么优势？"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"按需加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),n("h2",{attrs:{id:"cdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/6844903844455907336",target:"_blank",rel:"noopener noreferrer"}},[t._v("暂时参考"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"使用事件委托"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用事件委托"}},[t._v("#")]),t._v(" 使用事件委托")]),t._v(" "),n("p",[t._v("事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。所有用到按钮的事件（多数鼠标事件和键盘事件）都适合采用事件委托技术， 使用事件委托可以节省内存。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("苹果"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("香蕉"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("凤梨"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ul'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LI'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),n("h2",{attrs:{id:"图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),n("h3",{attrs:{id:"懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),n("p",[t._v("在页面中，先不给图片设置路径，只有当图片出现在浏览器的可视区域时，才去加载真正的图片，这就是懒加载。对于图片很多的网站来说，一次性加载全部图片，会对用户体验造成很大的影响，所以需要使用图片延迟加载。")]),t._v(" "),n("p",[t._v("首先可以将图片这样设置，在页面不可见时图片不会加载：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://xxxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("等页面可见时，使用 JS 加载图片：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src\n")])])]),n("p",[t._v("参考："),n("a",{attrs:{href:"./2"}},[t._v("图片懒加载实现")])]),t._v(" "),n("h3",{attrs:{id:"响应式图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式图片"}},[t._v("#")]),t._v(" 响应式图片")]),t._v(" "),n("p",[t._v("响应式图片的优点是浏览器能够根据屏幕大小自动加载合适的图片。")]),t._v(" "),n("p",[t._v("通过 "),n("code",[t._v("picture")]),t._v(" 实现：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("picture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("banner_w1000.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 801px)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("banner_w800.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 800px)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("banner_w800.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("picture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("通过 "),n("code",[t._v("@media")]),t._v(" 实现：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 769px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bg")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bg1080.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bg")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bg768.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports},968:function(t,a,s){t.exports=s.p+"assets/img/12.e115f3de.jpg"},969:function(t,a,s){t.exports=s.p+"assets/img/13.4ebf069b.jpg"},970:function(t,a,s){t.exports=s.p+"assets/img/14.253fdffc.jpg"}}]);