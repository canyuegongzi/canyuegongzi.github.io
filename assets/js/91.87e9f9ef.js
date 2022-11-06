(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{981:function(e,a,t){"use strict";t.r(a);var n=t(73),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" zookeeper")]),e._v(" "),t("h3",{attrs:{id:"deployment-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-yml"}},[e._v("#")]),e._v(" deployment.yml")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: zookeeper\n  name: zookeeper\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: zookeeper\n  template:\n    metadata:\n      labels:\n        app: zookeeper\n    spec:\n      containers:\n        - image: wurstmeister/zookeeper\n          imagePullPolicy: IfNotPresent\n          name: zookeeper\n          ports:\n            - containerPort: 2181\n\n")])])]),t("h3",{attrs:{id:"service-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-yml"}},[e._v("#")]),e._v(" service.yml")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: zookeeper-service\n  name: zookeeper-service\nspec:\n  type: LoadBalancer\n  ports:\n    - name: zookeeper-port\n      port: 30181\n      protocol: TCP\n      targetPort: 2181\n  selector:\n    app: zookeeper\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);