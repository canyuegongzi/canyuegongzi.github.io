(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1187:function(t,a,s){"use strict";s.r(a);var n=s(73),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"本地存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地存储"}},[t._v("#")]),t._v(" 本地存储")]),t._v(" "),s("p",[t._v("浏览器的本地存储主要分为"),s("code",[t._v("Cookie")]),t._v("、"),s("code",[t._v("WebStorage")]),t._v("和"),s("code",[t._v("IndexDB")]),t._v(", 其中"),s("code",[t._v("WebStorage")]),t._v("又可以分为"),s("code",[t._v("localStorage")]),t._v("和"),s("code",[t._v("sessionStorage")]),t._v("。接下来我们就来一一分析这些本地存储方案。")]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),s("p",[t._v("Cookie 主要用于以下三个方面：")]),t._v(" "),s("ol",[s("li",[t._v("会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）")]),t._v(" "),s("li",[t._v("个性化设置（如用户自定义设置、主题等）")]),t._v(" "),s("li",[t._v("浏览器行为跟踪（如跟踪分析用户行为等）")])]),t._v(" "),s("ul",[s("li",[t._v("大小只有4k")]),t._v(" "),s("li",[t._v("发起请求会默认带上cookie")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/157",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器系列之 Cookie 和 SameSite 属性"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),s("p",[t._v("以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。")]),t._v(" "),s("p",[t._v("大小：每个站点支持5M")]),t._v(" "),s("p",[t._v("使用方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Libai'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AINI'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Libai'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Libai'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除所有")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"浏览器不支持localstorage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主逻辑业务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),s("p",[s("code",[t._v("sessionStorage")]),t._v(" 类似 "),s("code",[t._v("localStorage")]),t._v("，但其区别在于：")]),t._v(" "),s("ul",[s("li",[t._v("存储在 "),s("code",[t._v("localStorage")]),t._v(" 的数据可以长期保留；")]),t._v(" "),s("li",[t._v("存储在 "),s("code",[t._v("sessionStorage")]),t._v(" 的关闭页面后即被清空。")])]),t._v(" "),s("h2",{attrs:{id:"indexdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexdb"}},[t._v("#")]),t._v(" IndexDB")]),t._v(" "),s("p",[t._v("参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/indexeddb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器数据库 IndexedDB 入门教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/6844903570005835789",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndexedDB使用与出坑指南"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);