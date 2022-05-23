module.exports = {
	title: 'Marvin',
	description: 'Live and Study.',
	head: [
		['script', { charset: "utf-8", src: "/core.esm.js" }],
		['script', { charset: "utf-8", src: "/web-plus.esm.js" }],
		['link', { rel: 'icon', href: '/images/photo.png' }],
		['meta', { name: 'theme-color', content: '#0084ff' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/photo' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	theme: 'antdocs',
	base: '/',
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		lastUpdated: false,
		backToTop: true,
		smoothScroll: true,
		nav:[
			{text: 't-cli', key: '1', link: '/t-cli/'},
			// {text: 'web-plus-ui', key: '13', link: '/component-plus/'},
			{text: 'web-plus-ui', key: '13', link: 'https://wu-component.github.io/component-plus/'},
			/*{text: 'web-ui', key: '2', link: '/web-component-ui/'},*/
			{text: '前端', key: '3', link: '/web/'},
			// {text: '浏览器扩展', link: '/chrome-extension/'},
			{text: '浏览器扩展', key: '4', link: '/extension/'},
			{text: '后端', key: '5', link: '/after/'},
			{text: '进阶', key: '6', link: '/other/'},
			{text: '设计', key: '7', link: '/design/'},
			{text: 'Blog', key: '8', link: 'http://blog.canyuegongzi.xyz'},
			{text: '全栈项目', key: '9', link: 'https://github.com/canyuegongzi'},
			{text: 'Github', key: '10', link: 'https://github.com/canyuegongzi'}
		],
		sidebar: {
			'/t-cli/': [
				{
					title: '安装',
					sidebarDepth: 0,
					children: [
						'/t-cli/安装/install',
						'/t-cli/安装/t-cli-cmd',
					]
				},
				{
					title: '工程模板',
					sidebarDepth: 0,
					children: [
						'/t-cli/工程模板/web-core-component',
						'/t-cli/工程模板/node-nest',
						'/t-cli/工程模板/node-simple-typescript',
						'/t-cli/工程模板/web-webpack4-typescript',
						'/t-cli/工程模板/web-webpack4-vue2-javascript',
						'/t-cli/工程模板/web-webpack4-vue2-typescript',
						'/t-cli/工程模板/web-webpack4-react-javascript',
						'/t-cli/工程模板/web-webpack4-react-typescript',
						'/t-cli/工程模板/web-webpack5-vue2-javascript',
						'/t-cli/工程模板/web-webpack5-vue2-typescript',
					]
				}
			],
			'/component-plus/': [
				{
					title: "开发者",
					sidebarDepth: 0,
					children: [
						'/component-plus/CorePlus/Install',
						'/component-plus/CorePlus/Decorators',
						'/component-plus/CorePlus/Lifecycle',
						'/component-plus/CorePlus/Build',

					]
				},
				{
					title: 'Basic',
					sidebarDepth: 0,
					children: [
						'/component-plus/Basic/Button',
						'/component-plus/Basic/Icon',
						'/component-plus/Basic/Link',
						'/component-plus/Basic/Tag',
						'/component-plus/Basic/Progress',
					]
				},
				{
					title: 'Form',
					sidebarDepth: 0,
					children: [
						'/component-plus/Form/Radio',
						'/component-plus/Form/Input',
						'/component-plus/Form/Switch',
						'/component-plus/Form/Checkbox',
						'/component-plus/Form/Rate',
					]
				},
				{
					title: 'Layout',
					sidebarDepth: 0,
					children: [
						'/component-plus/Layout/Layout',
						'/component-plus/Layout/Breadcrumb',
						'/component-plus/Layout/PageHeader',
					]
				},
				{
					title: 'TimePicker',
					sidebarDepth: 0,
					children: []
				},
				{
					title: 'Data',
					sidebarDepth: 0,
					children: [
						'/component-plus/Data/Table',
					]
				},
				{
					title: 'Notice',
					sidebarDepth: 0,
					children: [
						'/component-plus/Navigation/Message',
					]
				},
				{
					title: 'Navigation',
					sidebarDepth: 0,
					children: [
					]
				},
				{
					title: 'Others',
					sidebarDepth: 0,
					children: [
					]
				},




			],
			/*'/web-component-ui/': [
				{
					title: 'Basic',
					sidebarDepth: 2,
					children: [
						'/web-component-ui/Basic/Button'
					]
				},
				{
					title: 'Form',
					sidebarDepth: 2,
					children: [
						'/web-component-ui/Form/Radio',
						'/web-component-ui/Form/Input',
					]
				},
				{
					title: 'Data',
					sidebarDepth: 2,
					children: [
						'/web-component-ui/Data/Tree',
					]
				},
				{
					title: 'Layout',
					sidebarDepth: 2,
					children: []
				},

			],*/
			'/web/': [
				{
					title: 'Vue 原理',
					sidebarDepth: 2,
					children: [
						'/web/vue/9',
						'/web/vue/1',
						'/web/vue/2',
						'/web/vue/3',
						'/web/vue/4',
						'/web/vue/5',
						'/web/vue/6',
						'/web/vue/7',
						'/web/vue/8',
						'/web/vue/10',
						'/web/vue/20'
					]
				},
				{
					title: 'Vue 方法',
					sidebarDepth: 2,
					children: [
						'/web/vue2/1',
						'/web/vue2/2',
						'/web/vue2/3',
						'/web/vue2/4',
						'/web/vue2/5',
						'/web/vue2/6',
						'/web/vue2/7',
						'/web/vue2/8',
						'/web/vue2/9',
						'/web/vue2/10',
						'/web/vue2/20'
					]
				},
				{
					title: 'CSS',
					sidebarDepth: 2,
					children: [
						'/web/CSS/1',
						'/web/CSS/7',
						'/web/CSS/2',
						'/web/CSS/3',
						'/web/CSS/4',
						'/web/CSS/5',
						'/web/CSS/6',
					]
				},
				{
					title: 'ES6',
					children: [
						'/web/ES6/1',
						'/web/ES6/2',
						'/web/ES6/4',
						'/web/ES6/3',
						'/web/ES6/5'
					]
				},
				{
					title: 'Base',
					children: [
						'/web/Base/1',
						'/web/Base/2',
						'/web/Base/3',
						'/web/Base/4',
						'/web/Base/5'
					]
				},
				{
					title: 'DOM、BOM',
					sidebarDepth: 2,
					children: [
						'/web/Core/1',
						'/web/Core/2',
						'/web/Core/3'
					]
				},
				{
					title: 'Array',
					children: [
						'/web/Array/1',
						'/web/Array/2',
						'/web/Array/3',
						'/web/Array/4',
						'/web/Array/5',
						'/web/Array/6',
						'/web/Array/7'
					]
				},
				{
					title: 'Object',
					children: [
						'/web/Object/1',
						'/web/Object/2',
						'/web/Object/3',
						'/web/Object/4',
						'/web/Object/5',
						'/web/Object/6'
					]
				},
				{
					title: 'Function',
					children: [
						'/web/Function/1'
					]
				},
				{
					title: 'String',
					children: [
						'/web/String/1',
						'/web/String/2',
						'/web/String/3',
						'/web/String/4'
					]
				},
				{
					title: 'Async',
					children: [
						'/web/Async/1',
						'/web/Async/2',
						'/web/Async/3',
						'/web/Async/4',
						'/web/Async/5',
						'/web/Async/6',
						'/web/Async/7'
					]
				},
				{
					title: 'Browser',
					children: [
						'/web/browser/1',
						'/web/browser/2',
						'/web/browser/3',
						'/web/browser/4',
						'/web/browser/5'
					]
				},
				{
					title: '性能优化',
					sidebarDepth: 2,
					children: [
						'/web/性能优化/1',
						'/web/性能优化/2',
						'/web/性能优化/3',
						'/web/性能优化/4',
						'/web/性能优化/5',
						'/web/性能优化/6',
						'/web/性能优化/7',
						'/web/性能优化/8',
						'/web/性能优化/9'
					]
				},
				{
					title: '正则',
					children: [
						'/web/正则/1',
						'/web/正则/2'
					]
				},
				{
					title: 'HTTP',
					sidebarDepth: 2,
					children: [
						'/web/http/1',
						'/web/http/2',
						'/web/http/3',
						'/web/http/4',
						'/web/http/5',
						'/web/http/6',
						'/web/http/7',
						'/web/http/8',
						'/web/http/9',
						'/web/http/10',
					]
				},
				{
					title: 'webpack',
					sidebarDepth: 2,
					children: [
						'/web/webpack/1'
					]
				},
			],
			'/extension/': [
				{
					title: '入门',
					sidebarDepth: 2,
					children: [
						'/extension/what-is-extensions',
						'/extension/getstarted',
						'/extension/overview'
					]
				},
				{
					title: 'API',
					sidebarDepth: 2,
					children: [
						'/extension/manifest',
						'/extension/background_content',
						'/extension/user_interface',
						'/extension/content_scripts',
						'/extension/permission_warnings',
						'/extension/options',
						'/extension/devguide',
						'/extension/performance',
						'/extension/user_privacy',
						'/extension/tut_debugging',
						'/extension/tut_oauth',
						'/extension/a11y',
						'/extension/contentSecurityPolicy',
						'/extension/xhr',
						'/extension/messaging',
						'/extension/nativeMessaging',
						'/extension/match_patterns',
					]
				},
			],
			'/after/': [
				{
					title: 'node',
					sidebarDepth: 2,
					children: [
						{
							title: '系统模块',
							sidebarDepth: 1,
							children: [
								'/after/nodejs/buffer',
								'/after/nodejs/events',
								'/after/nodejs/crypto',
								'/after/nodejs/net',
								'/after/nodejs/dns',
								'/after/nodejs/cache',
								'/after/nodejs/process-threads',
								'/after/nodejs/cluster-base',
							]
						},
					]
				},
				{
					title: 'mongodb',
					sidebarDepth: 2,
					children: [
						'/after/mongo/1',
						'/after/mongo/2'
					]
				},
				{
					title: 'Docker',
					sidebarDepth: 2,
					children: [
						'/after/docker/docker-base',
					]
				},
				{
					title: 'k8s',
					sidebarDepth: 2,
					children: [
						{
							title: '环境部署',
							sidebarDepth: 2,
							children: [
								'/after/k8s/环境部署/mysql',
								'/after/k8s/环境部署/redis',
								'/after/k8s/环境部署/kafka',
								'/after/k8s/环境部署/mongodb',
								'/after/k8s/环境部署/rabbitmq',
								'/after/k8s/环境部署/zookeeper',
							]
						},
						{
							title: 'SSL',
							sidebarDepth: 2,
							children: [
								'/after/k8s/ssl/ssl'
							]
						},
					]
				},
				{
					title: 'mysql',
					sidebarDepth: 2,
					children: []
				},
				{
					title: 'redis',
					sidebarDepth: 2,
					children: []
				},
				{
					title: 'python',
					sidebarDepth: 2,
					children: []
				},
			],
			'/design/': [
				{
					title: '微前端',
					sidebarDepth: 2,
					children: [
						'/design/microserviceWeb/overview'
					]
				},
				{
					title: '分布式',
					sidebarDepth: 2,
					children: [
						'/design/分布式/redis-lock'
					]
				},
				{
					title: '技术选型',
					sidebarDepth: 2,
					children: [
						'/design/技术选型/after'
					]
				},
			],
			'/other/': [
				// {
				// 	title: '高阶函数',
				// 	sidebarDepth: 2,
				// 	children: [
				// 		'/other/高阶函数/1',
				// 	]
				// },
				{
					title: '手写 API',
					children: [
						'/other/手写/1',
						'/other/手写/2',
						'/other/手写/3',
						'/other/手写/4',
						'/other/手写/5',
						'/other/手写/6',
						'/other/手写/7',
						'/other/手写/8',
						'/other/手写/9',
						'/other/手写/10',
						'/other/手写/11',
						'/other/手写/12',
						'/other/手写/13',
						'/other/手写/14'
					]
				},
				{
					title: '设计模式',
					sidebarDepth: 2,
					children: [
						'/other/设计模式/1',
						'/other/设计模式/2',
						'/other/设计模式/3',
						'/other/设计模式/4',
						'/other/设计模式/5',
						'/other/设计模式/6',
					]
				},
				{
					title: '数据结构',
					sidebarDepth: 2,
					children: [
						'/other/数据结构/1',
						'/other/数据结构/2',
						'/other/数据结构/3',
						'/other/数据结构/4',
						'/other/数据结构/5',
						'/other/数据结构/6',
						'/other/数据结构/7',
						'/other/数据结构/8',
						'/other/数据结构/9',
					]
				},
				{
					title: '算法学习',
					sidebarDepth: 2,
					children: [
						'/other/算法/1',
						'/other/算法/2',
						'/other/算法/3',
						'/other/算法/4',
					]
				},
				{
					title: '一些面试题',
					children: [
						'/other/Other/1',
						'/other/Other/2',
						'/other/Other/3',
						'/other/Other/4',
						'/other/Other/5',
						'/other/Other/6',
						'/other/Other/7',
						'/other/Other/8',
						'/other/Other/9',
						'/other/Other/10',
						'/other/Other/11'
					]
				},
			]
		}
	},
	plugins: [
		require('vuepress-plugin-demo-container'),
		/*[
			'vuepress-plugin-comment',
			{
				// choosen: 'valine',
				choosen: 'gitalk',
				// options选项中的所有参数，会传给Valine的配置
				options: {
					// el: '#valine-vuepress-comment',
					// appId: 'PVsiIhfVXf7pLlF4CKL4duC7-gzGzoHsz',
					// appKey: 'kpiIiP94nrjz2w5lMMHmyRcA'

					clientID: 'e2904d004ede111c5047',
					clientSecret: '31929050c6443cdba855213a72a31c904dceb050',
					repo: 'canyuegongzi.github.io',
					owner: 'canyuegongzi',
					admin: ['canyuegongzi'],
					distractionFreeMode: false
				}
			}
		]*/
	],
};
