(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{994:function(t,o,e){"use strict";e.r(o);var _=e(73),v=Object(_.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"匹配模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式"}},[t._v("#")]),t._v(" 匹配模式")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.chrome.com/extensions/declare_permissions#host-permissions",target:"_blank",rel:"noopener noreferrer"}},[t._v("主机权限"),e("OutboundLink")],1),t._v("和"),e("RouterLink",{attrs:{to:"/extension/content_scripts.html"}},[t._v("内容脚本匹配")]),t._v(" 是基于匹配模式定义的一组 URL。匹配模式本质上是一个以允许的 schema（http，https，file 或ftp 开头）的URL，并且可以包含 “*” 字符。特殊模式 < all_urls > 匹配以允许的 schema 开头的任何 URL。 每个模式包含 3 个部分：")],1),t._v(" "),e("ul",[e("li",[t._v("schema - 例如，http 或file 或 *")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意：对文件 URL 的访问不是自动的。用户必须访问扩展管理页面，并选择对每个请求扩展的文件进行文件访问。")])]),t._v(" "),e("ul",[e("li",[t._v("host -例如，www.google.com 或*.google.com 或 *； 如果 schema 是 file，则没有 host 部分")]),t._v(" "),e("li",[t._v("path-例如，/"),e("em",[t._v("，/foo")]),t._v(" 或 /foo/bar。该路径必须在 host permission 中，但始终被视为 /*。")])]),t._v(" "),e("p",[t._v("基本语法如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<url-pattern> := <scheme>://<host><path>\n<scheme> := '*' | 'http' | 'https' | 'file' | 'ftp'\n<host> := '*' | '*.' <any char except '/' and '*'>+\n<path> := '/' <any chars>\n")])])]),e("p",[t._v('" * " 的含义取决于它是在 schema, host 还是 path 部分中。如果 schema 为 " * "，则它匹配 http 或 https，而不匹配 file 或 ftp。 如果 host 为" * "，则它匹配任何主机。如果 host 是 "*.hostname"，则它匹配指定的 host 或任何子域。在 path 部分，每个 " * " 匹配 0个或多个字符。 下表显示了一些有效的模式。')]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Pattern")]),t._v(" "),e("th",[t._v("What it does")]),t._v(" "),e("th",[t._v("Examples of matching URLs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("http://*/*")]),t._v(" "),e("td",[t._v("匹配使用 http schema 的所有 URL")]),t._v(" "),e("td",[t._v("http://www.google.com/   http://example.org/foo/bar.html")])]),t._v(" "),e("tr",[e("td",[t._v("http://*/foo*")]),t._v(" "),e("td",[t._v("匹配任何在主机上使用 http schema 的 URL，并且路径以 /foo开头")]),t._v(" "),e("td",[t._v("http://example.com/foo/bar.html http://www.google.com/foo")])]),t._v(" "),e("tr",[e("td",[t._v("https://*.google.com/foo*bar")]),t._v(" "),e("td",[t._v("匹配 google.com主机上的任何使用 https schema 的 URL（例如 www.google.com，docs.google.com或 google.com），路径以 /foo开头并以 bar 结尾")]),t._v(" "),e("td",[t._v("https://www.google.com/foo/baz/bar https://docs.google.com/foobar")])]),t._v(" "),e("tr",[e("td",[t._v("http://example.org/foo/bar.html")]),t._v(" "),e("td",[t._v("匹配指定的URL")]),t._v(" "),e("td",[t._v("http://example.org/foo/bar.html")])]),t._v(" "),e("tr",[e("td",[t._v("file:///foo*")]),t._v(" "),e("td",[t._v("匹配路径以 /foo 开头的任何本地文件")]),t._v(" "),e("td",[t._v("file:///foo/bar.html file:///foo")])]),t._v(" "),e("tr",[e("td",[t._v("http://127.0.0.1/*")]),t._v(" "),e("td",[t._v("匹配使用 http schema 且位于主机127.0.0.1上的 URL")]),t._v(" "),e("td",[t._v("http://127.0.0.1/ http://127.0.0.1/foo/bar.html")])]),t._v(" "),e("tr",[e("td",[t._v("*😕/mail.google.com/*")]),t._v(" "),e("td",[t._v("匹配以 http://mail.google.com 或https://mail.google.com 开头的 URL。")]),t._v(" "),e("td",[t._v("http://mail.google.com/foo/baz/bar https://mail.google.com/foobar")])]),t._v(" "),e("tr",[e("td",[t._v("< all_urls >")]),t._v(" "),e("td",[t._v("匹配使用允许 schema 的任何 URL。")]),t._v(" "),e("td",[t._v("http://example.org/foo/bar.html file:///bar/baz.html")])])])]),t._v(" "),e("p",[t._v("以下是无效模式匹配的一些示例：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Bad pattern")]),t._v(" "),e("th",[t._v("Why it's bad")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("http://www.google.com")]),t._v(" "),e("td",[t._v("没有 path")])]),t._v(" "),e("tr",[e("td",[t._v("http://*foo/bar")]),t._v(" "),e("td",[t._v("主机中的 “*”后面只能有一个 “.” 或 '/'")])]),t._v(" "),e("tr",[e("td",[t._v("http://foo.*.bar/baz")]),t._v(" "),e("td",[t._v("如果主机中有 “*”，则必须为第一个字符")])]),t._v(" "),e("tr",[e("td",[t._v("http:/bar")]),t._v(" "),e("td",[t._v("缺少 schema 分隔符（“/”应为 “//”）")])]),t._v(" "),e("tr",[e("td",[t._v("foo://*")]),t._v(" "),e("td",[t._v("无效的 schema")])])])])])}),[],!1,null,null,null);o.default=v.exports}}]);