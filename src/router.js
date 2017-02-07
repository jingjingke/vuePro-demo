import home from './components/home';

export default [
	{ path: '/', component : home , children:[
		{ path: '/', redirect : '/loan' },
		{ path: '/login', component : resolve => require(['./view/other/login'], resolve) },
		{ path: '/reg', component : resolve => require(['./view/other/reg'], resolve) },
		{ path: '/forget', component : resolve => require(['./view/other/forget'], resolve) },
		
		{ path: '/agreement', component : resolve => require(['./view/other/agreement'], resolve) },
		
		{ path: 'user', component : home , children:[
			{ path: '/', component : resolve => require(['./view/user/index'], resolve) },
			{ path: 'borrowList', component : resolve => require(['./view/user/borrowList'], resolve) , children:[
				{ path:'/' , component: resolve => require(['./view/user/borrowListAll'], resolve) },
				{ path:'apply' , component: resolve => require(['./view/user/borrowListApply'], resolve) },
				{ path:'repay' , component: resolve => require(['./view/user/borrowListRepay'], resolve) },
				{ path:'over' , component: resolve => require(['./view/user/borrowListOver'], resolve) },
			]},
			{ path: 'borrowDetail/:id', component:resolve => require(['./view/user/borrowDetail'], resolve)	},
			{ path: 'borrowDetail/:id/more', component:resolve => require(['./view/user/borrowDmore'], resolve)	},
			{ path: 'borrowReason/:id', component : resolve => require(['./view/user/borrowReason'], resolve) },
			{ path: 'dealList', component : resolve => require(['./view/user/dealList'], resolve) },	
			{ path: 'dealDetail', component : resolve => require(['./view/user/dealDetail'], resolve) },
			{ path: 'repayList', component : resolve => require(['./view/user/repayList'], resolve) },
			{ path: 'repayGo/:id/:total', component : resolve => require(['./view/user/repayGo'], resolve) },
			{ path: 'repayTips', component : resolve => require(['./view/user/repayTips'], resolve) },
			{ path: 'repayRecord', component : resolve => require(['./view/user/repayRecord'], resolve) },
			{ path: 'rewardList', component : resolve => require(['./view/user/rewardList'], resolve) , children:[
				{ path:'/' , component: resolve => require(['./view/user/rewardUnused'], resolve) },
				{ path:'used' , component: resolve => require(['./view/user/rewardUsed'], resolve) },
				{ path:'expired' , component: resolve => require(['./view/user/rewardExpired'], resolve) }
			]},	
			{ path: 'helpList', component : resolve => require(['./view/user/helpList'], resolve) },
			{ path: 'helpDetail/:index', component : resolve => require(['./view/user/helpDetail'], resolve) },
			{ path: 'feedback', component : resolve => require(['./view/user/feedback'], resolve) },
			{ path: 'aboutUs', component : resolve => require(['./view/user/aboutUs'], resolve) }
		]},
	
		{path: 'loan', component : home , children:[
			{ path: '/', component : resolve => require(['./view/loan/index'], resolve) },
			{ path: 'micro', component : resolve => require(['./view/loan/loanMicro'], resolve) },
			{ path: 'samll', component : resolve => require(['./view/loan/loanSmall'], resolve) },
			{ path: 'large', component : resolve => require(['./view/loan/loanLarge'], resolve) },
			{ path: 'dataComm', component : resolve => require(['./view/loan/dataComm'], resolve) },
			{ path: 'dataMust', component : resolve => require(['./view/loan/dataMust'], resolve) },
			{ path: 'dataSelect', component : resolve => require(['./view/loan/dataSelect'], resolve) },
			{ path: 'submitApply', component : resolve => require(['./view/loan/submitApply'], resolve) },
			{ path: 'loanDes', component : resolve => require(['./view/loan/des'], resolve) },
			{ path: 'loanRecom', component : resolve => require(['./view/loan/recom'], resolve) },
			{ path: 'sureMsg', component : resolve => require(['./view/loan/sureMsg'], resolve) },
			{ path: 'sureMore', component : resolve => require(['./view/loan/sureMore'], resolve) },
			{ path: 'cancelSup', component : resolve => require(['./view/loan/cancelSup'], resolve) }
		
		]},
		
		{path: 'credit', component : home , children:[
			{ path: '/', component : resolve => require(['./view/credit/index'], resolve) },
			{ path: 'userInfo', component : resolve => require(['./view/credit/userInfo'], resolve) },
			{ path: 'contacts', component : resolve => require(['./view/credit/contacts'], resolve) },
			{ path: 'scan', component : resolve => require(['./view/credit/scan'], resolve) },
			{ path: 'work', component : resolve => require(['./view/credit/work'], resolve)},
			{ path: 'bankInfo', component : resolve => require(['./view/credit/bankInfo'], resolve)},
			{ path: 'support', component : resolve => require(['./view/credit/supportBank'], resolve)},
			{ path: 'bankHelp', component : resolve => require(['./view/credit/bankHelp'], resolve)},
			{ path: 'bankSMS', component : resolve => require(['./view/credit/bankSMS'], resolve)},
			{ path: 'bankDetail', component : resolve => require(['./view/credit/bankDetail'], resolve)},
			{ path: 'mobile', component : resolve => require(['./view/credit/mobile'], resolve) },
			{ path: 'idCard', component : resolve => require(['./view/credit/checkIDcard'], resolve)},
			{ path: 'waterBank', component : resolve => require(['./view/credit/waterBank'], resolve)},
			{ path: 'waterLogin/:index', component : resolve => require(['./view/credit/waterLogin'], resolve)},
			{ path: 'sbsqCity', component : resolve => require(['./view/credit/sbsqCity'], resolve)},
			{ path: 'sbsqLogin', component : resolve => require(['./view/credit/sbsqLogin'], resolve)},
			{ path: 'gjjCity', component : resolve => require(['./view/credit/sbsqCity'], resolve)},
			{ path: 'gjjLogin', component : resolve => require(['./view/credit/sbsqLogin'], resolve)},
			{ path: 'zhima', component : resolve => require(['./view/credit/zhima'], resolve)},
			{ path: 'alipay', component : resolve => require(['./view/credit/alipay'], resolve)},
			{ path: 'otherData', component : resolve => require(['./view/credit/dataOther'], resolve)},
			{ path: 'uploadPic/:param', component : resolve => require(['./view/credit/dataUpload'], resolve)}
		]},
		
		{ path: 'creditReport', component : home , children:[
			{ path: '/', component : resolve => require(['./view/credit/report/index'], resolve)},
			{ path: 'login', component : resolve => require(['./view/credit/report/login'], resolve)},
			{ path: 'get', component : resolve => require(['./view/credit/report/get'], resolve)},
			{ path: 'sms', component : resolve => require(['./view/credit/report/sms'], resolve)},
			{ path: 'answers', component : resolve => require(['./view/credit/report/answers'], resolve)},
			{ path: 'cover', component : resolve => require(['./view/credit/report/cover'], resolve)},
			{ path: 'list', component : resolve => require(['./view/credit/report/list'], resolve)},
			{ path: 'detail', component : resolve => require(['./view/credit/report/detail'], resolve)},
			{ path: 'helps', component : resolve => require(['./view/credit/report/helps'], resolve)},
			{ path: 'regHow', component : resolve => require(['./view/credit/report/regHow'], resolve)},
			{ path: 'regStep1', component : resolve => require(['./view/credit/report/regStep1'], resolve)},
			{ path: 'regStep2', component : resolve => require(['./view/credit/report/regStep2'], resolve)}
		]}
	]},
	{ path: '*', component : resolve => require(['./view/other/error'], resolve)}	
]
