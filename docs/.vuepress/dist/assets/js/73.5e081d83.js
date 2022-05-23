(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1157:function(t,s,a){"use strict";a.r(s);var n=a(73),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),n("p",[t._v("BFC全称 Block Formatting Context 即"),n("code",[t._v("块级格式上下文")]),t._v("，简单的说，BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界")]),t._v(" "),n("h2",{attrs:{id:"触发条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[t._v("#")]),t._v(" 触发条件")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("float")]),t._v("不为 none")]),t._v(" "),n("li",[n("code",[t._v("overflow")]),t._v("的值不为 visible")]),t._v(" "),n("li",[n("code",[t._v("position")]),t._v(" 为 absolute 或 fixed")]),t._v(" "),n("li",[n("code",[t._v("display")]),t._v("的值为 inline-block 或 table-cell 或 table-caption 或 grid")])]),t._v(" "),n("h2",{attrs:{id:"bfc的渲染规则是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc的渲染规则是什么"}},[t._v("#")]),t._v(" BFC的渲染规则是什么")]),t._v(" "),n("ul",[n("li",[t._v("BFC是一个独立的独立容器，不受外界干扰或干扰外界")]),t._v(" "),n("li",[t._v("计算BFC高度的时候，浮动元素也会参与计算")]),t._v(" "),n("li",[t._v("BFC的区域不会与浮动元素的区域重叠")]),t._v(" "),n("li",[t._v("BFC垂直方向边距重叠")])]),t._v(" "),n("h2",{attrs:{id:"bfc的应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc的应用场景"}},[t._v("#")]),t._v(" BFC的应用场景")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("清除浮动")]),t._v("：BFC内部的浮动元素会参与高度计算，因此可用于清除浮动，防止高度塌陷")]),t._v(" "),n("li",[n("strong",[t._v("避免某元素被浮动元素覆盖")]),t._v("：BFC的区域不会与浮动元素的区域重叠")]),t._v(" "),n("li",[n("strong",[t._v("阻止外边距重叠")]),t._v("：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(912),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"清除浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),n("ol",[n("li",[t._v("使用after伪元素清除浮动（推荐）")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 对父元素添加伪元素 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent::after")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("触发父元素BFC")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 触发父元素BFC */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* float: left; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* position: absolute; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* display: inline-block */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 以上属性均可触发BFC */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("添加新元素 (不推荐,语义化)")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 添加一个空元素，利用css提供的clear:both清除浮动 --\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token special-attr"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token value css language-css"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n")])])])])}),[],!1,null,null,null);s.default=e.exports},912:function(t,s,a){t.exports=a.p+"assets/img/bfc.c0a4749a.png"}}]);