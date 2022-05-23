(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1193:function(t,e,a){"use strict";a.r(e);var v=a(73),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-和-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-和-https"}},[t._v("#")]),t._v(" HTTP 和 HTTPS")]),t._v(" "),a("h2",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("p",[t._v("HTTP 是一种 超文本传输协议(Hypertext Transfer Protocol)，HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范")]),t._v(" "),a("p",[t._v("HTTP 协议默认是明文的，也就是说在请求的过程中，可能会被劫持和篡改数据。为了安全等问题，所以才有了 HTTPS。")]),t._v(" "),a("h2",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),a("p",[t._v("HTTPS 的全称是 Hypertext Transfer Protocol Secure，从名称我们可以看出 HTTPS 要比 HTTPS 多了 secure 安全性这个概念，实际上，HTTPS 并不是一个新的应用层协议，它其实就是 HTTP + TLS/SSL 协议组合而成，而安全性的保证正是 TLS/SSL 所做的工作。")]),t._v(" "),a("p",[a("strong",[t._v("也就是说，HTTPS 就是身披了一层 SSL 的 HTTP。")])]),t._v(" "),a("p",[t._v("SSL 握手过程:")]),t._v(" "),a("ol",[a("li",[t._v("建立安全能力 包括协议版本 会话Id 密码构件 压缩方法和初始随机数")]),t._v(" "),a("li",[t._v("服务器发送密钥和证书请求")]),t._v(" "),a("li",[t._v("如果有证书请求客户端发送此证书 之后客户端发送密钥交换数据 也可以发送证书验证消息")]),t._v(" "),a("li",[t._v("变更密码构件，结束握手协议")])]),t._v(" "),a("h2",{attrs:{id:"两者区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者区别"}},[t._v("#")]),t._v(" 两者区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("xx")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("协议")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("端口")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("性能")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("原理")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("HTTP")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("http://")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("80")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不安全")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("明文传输（不加密）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用层")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("HTTPS")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("https://")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("443")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("安全")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SSL加密、身份认证（加密）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("传输层")])])])]),t._v(" "),a("ul",[a("li",[t._v("HTTP 是未经安全加密的协议，它的传输过程容易被攻击者监听、数据容易被窃取、发送方和接收方容易被伪造；")]),t._v(" "),a("li",[t._v("而 HTTPS 是安全的协议，它通过 "),a("strong",[t._v("密钥交换算法 - 签名算法 - 对称加密算法 - 摘要算法")]),t._v(" 能够解决上面这些问题。")])]),t._v(" "),a("h2",{attrs:{id:"get-和-post-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-区别"}},[t._v("#")]),t._v(" GET 和 POST 区别")]),t._v(" "),a("p",[t._v("HTTP 中包括许多方法，Get 和 Post 是 HTTP 中最常用的两个方法，基本上使用 HTTP 方法中有 99% 都是在使用 Get 方法和 Post 方法，所以有必要我们对这两个方法有更加深刻的认识。")]),t._v(" "),a("p",[t._v("安全：")]),t._v(" "),a("ul",[a("li",[t._v("get 方法是不安全的，因为你在发送请求的过程中，你的请求参数会拼在 URL 后面，从而导致容易被攻击者窃取，对你的信息造成破坏和伪造；")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" /test/demo_form.asp?name1=value1&name2=value2 \n")])])]),a("p",[t._v("而 post 方法是把参数放在请求体 body 中的，这对用户来说不可见。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /test/demo_form.asp HTTP/1.1\nHost: w3schools.com\nname1=value1&name2=value2 \n")])])]),a("ul",[a("li",[t._v("GET 请求的 URL 有长度限制，而 POST 请求会把参数放在消息体中，长度无限制。")]),t._v(" "),a("li",[t._v("GET 请求会被浏览器主动缓存下来，而 POST 默认不会。")]),t._v(" "),a("li",[t._v("GET 请求会把请求报文一次性发出去；请求会把请求报文一次性发出去。\n"),a("ul",[a("li",[t._v("对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去；")]),t._v(" "),a("li",[t._v("而对于 POST，浏览器先发送 header，服务器响应100(continue)，浏览器再发送data。")])])])]),t._v(" "),a("h2",{attrs:{id:"http-版本区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-版本区别"}},[t._v("#")]),t._v(" HTTP 版本区别")])])}),[],!1,null,null,null);e.default=_.exports}}]);