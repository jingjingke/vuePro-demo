import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

//引用VUE模板
import home from './components/home';							//根目录
import login from './view/other/login';							//--登录
import reg from './view/other/reg';								//--注册
import forget from './view/other/forget';						//--忘记密码
import agreement from './view/other/agreement';					//--协议页面
//user-components
import userIndex from './view/user/index';						//个人中心首页
import borrowList from './view/user/borrowList';				//我的借款列表
import borrowListAll from './view/user/borrowListAll';			//--全部
import borrowListApply from './view/user/borrowListApply';		//--申请中
import borrowListRepay from './view/user/borrowListRepay';		//--待归还
import borrowListOver from './view/user/borrowListOver';		//--已结束
import borrowDetail from './view/user/borrowDetail';			//--借款详情-默认
import borrowDmore from './view/user/borrowDmore';				//--借款详情-更多
import borrowReason from './view/user/borrowReason';			//借款详情-不过理由
import dealList from './view/user/dealList';					//借款合同列表
import dealDetail from './view/user/dealDetail';				//借款合同详情
import repayList from './view/user/repayList';					//我的还款列表
import repayGo from './view/user/repayGo';						//我的还款--操作还款
import repayTips from './view/user/repayTips';					//我的还款--操作成功提示
import repayRecord from './view/user/repayRecord';				//我的还款记录
import rewardList from './view/user/rewardList';				//我的奖励列表
import rewardUnused from './view/user/rewardUnused';			//--未使用
import rewardUsed from './view/user/rewardUsed';				//--已使用
import rewardExpired from './view/user/rewardExpired';			//--已过期
import helpList from './view/user/helpList';					//帮助中心-列表
import helpDetail from './view/user/helpDetail';				//帮助中心-内容
import feedback from './view/user/feedback';					//意见反馈
import aboutUs from './view/user/aboutUs';						//关于我们
//loan-components
import loanIndex from './view/loan/index';						//借款中心首页
import loanMicro from './view/loan/loanMicro';					//详情--微额借款
import loanSmall from './view/loan/loanSmall';					//详情--小额借款
import loanLarge from './view/loan/loanLarge';					//详情--福利-大额借款
import dataComm	from './view/loan/dataComm';					//填写资料--普通
import dataMust	from './view/loan/dataMust';					//填写资料--必填
import dataSelect from './view/loan/dataSelect';				//填写资料--选填
import submitApply from './view/loan/submitApply';				//提交申请
import loanDes from './view/loan/des';							//借款描述
import loanRecom from './view/loan/recom';						//推荐人
import sureMsg from './view/loan/sureMsg';						//确认信息-重要
import sureMore from './view/loan/sureMore';					//确认信息-更多
import cancelSup from './view/loan/cancelSup';					//取消上标
//credit-components
import creditIndex from './view/credit/index';					//信用中心首页
import creditUserInfo from './view/credit/userInfo';			//个人信息
import creditContacts from './view/credit/contacts';			//紧急联系人
import creditScan from './view/credit/scan';					//人脸识别
import creditWork from './view/credit/work';					//工作信息
import creditBank from './view/credit/bankInfo';				//银行卡--信息
import supportBank from './view/credit/supportBank';			//银行卡--支持银行
import creditBankHelp from './view/credit/bankHelp';			//银行卡--帮助
import creditBankSMS from './view/credit/bankSMS';				//银行卡--短信验证
import creditBankDetail from './view/credit/bankDetail';		//银行卡--详情
import creditMobile from './view/credit/mobile';				//手机认证
import checkIDcard from './view/credit/checkIDcard';			//身份认证
import waterBank from './view/credit/waterBank';				//银行流水--选择银行
import waterLogin from './view/credit/waterLogin';				//银行流水--帐号登录
import sbsqCity from './view/credit/sbsqCity';					//社保授权--城市
import sbsqLogin from './view/credit/sbsqLogin';				//社保授权--登录
import gjjCity from './view/credit/sbsqCity';					//公积金授权--城市
import gjjLogin from './view/credit/sbsqLogin';					//公积金授权--登录
import creditZM from './view/credit/zhima';						//芝麻认证
import creditAlipay from './view/credit/alipay';				//支付宝认证
import creditOther from './view/credit/dataOther';				//其它资料
import creditUpload from './view/credit/dataUpload';			//上传图片
//credit-report-components
import reportIndex from './view/credit/report/index';			//信用报告--首页
import reportLogin from './view/credit/report/login';			//信用报告--登录
import reportGet from './view/credit/report/get';				//信用报告--获取
import reportSMS from './view/credit/report/sms';				//信用报告--短信验证
import reportAns from './view/credit/report/answers';			//信用报告--身份问题验证
import reportCover from './view/credit/report/cover';			//信用报告--报告封面
import reportList from './view/credit/report/list';				//信用报告--报告列表
import reportDetail from './view/credit/report/detail';			//信用报告--报告详情
import reportHelp from './view/credit/report/helps';			//信用报告--帮助中心
import reportRegHow from './view/credit/report/regHow';			//信用报告--如何注册
import reportRStep1 from './view/credit/report/regStep1';		//信用报告--注册步骤1
import reportRStep2 from './view/credit/report/regStep2';		//信用报告--注册步骤2

var router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{ path: '/', component : home , children:[							//根
			{ path: '/', redirect : '/loan' }, 								//默认信用首页
			{ path: '/login', component : login }, 							//--登录页面
			{ path: '/reg', component : reg }, 								//--注册页面
			{ path: '/forget', component : forget }, 						//--忘记密码
			
			{ path: '/agreement', component : agreement }, 					//--协议
			
			{ path: 'user', component : home , children:[					//个人中心系列页面
				{ path: '/', component : userIndex },						//默认-个人中心
				{ path: 'borrowList', component : borrowList , children:[	//我的借款列表
					{ path:'/' , component: borrowListAll },				//--全部
					{ path:'apply' , component: borrowListApply },			//--申请中
					{ path:'repay' , component: borrowListRepay },			//--待归还
					{ path:'over' , component: borrowListOver },			//--已结束
				]},
				{ path: 'borrowDetail/:id', component:borrowDetail	},		//我的借款-默认详情
				{ path: 'borrowDetail/:id/more', component:borrowDmore	},	//我的借款-更多详情
				{ path: 'borrowReason/:id', component : borrowReason },		//我的借款-不过理由
				{ path: 'dealList', component : dealList },					//我的借款-合同列表
				{ path: 'dealDetail', component : dealDetail },				//我的借款-合同详情
				{ path: 'repayList', component : repayList },				//我的还款列表
				{ path: 'repayGo/:id/:total', component : repayGo },		//我的还款--操作还款
				{ path: 'repayTips', component : repayTips },				//我的还款--操作成功提示
				{ path: 'repayRecord', component : repayRecord },			//我的还款记录
				{ path: 'rewardList', component : rewardList , children:[	//我的奖励列表
					{ path:'/' , component: rewardUnused },					//--默认未使用
					{ path:'used' , component: rewardUsed },				//--已使用
					{ path:'expired' , component: rewardExpired }			//--已失效
				]},	
				{ path: 'helpList', component : helpList },					//帮助列表
				{ path: 'helpDetail/:index', component : helpDetail },		//帮助内容
				{ path: 'feedback', component : feedback },					//意见反馈
				{ path: 'aboutUs', component : aboutUs }					//关于我们
			]},

			{path: 'loan', component : home , children:[					//贷款中心系列页面
				{ path: '/', component : loanIndex },						//默认-贷款首页
				{ path: 'micro', component : loanMicro },					//详情-微额借款
				{ path: 'samll', component : loanSmall },					//详情-小额借款
				{ path: 'large', component : loanLarge },					//详情-福利-大额借款
				{ path: 'dataComm', component : dataComm },					//填写资料--普通
				{ path: 'dataMust', component : dataMust },					//填写资料--必填
				{ path: 'dataSelect', component : dataSelect },				//填写资料--选填
				{ path: 'submitApply', component : submitApply },			//提交申请
				{ path: 'loanDes', component : loanDes },					//借款描述
				{ path: 'loanRecom', component : loanRecom },				//推荐人
				{ path: 'sureMsg', component : sureMsg },					//确认信息-重要
				{ path: 'sureMore', component : sureMore },					//确认信息-更多
				{ path: 'cancelSup', component : cancelSup }				//取消上标
			
			]},
			
			{path: 'credit', component : home , children:[					//信用中心系列页面
				{ path: '/', component : creditIndex },						//默认-信用首页
				{ path: 'userInfo', component : creditUserInfo },			//个人信息
				{ path: 'contacts', component : creditContacts },			//紧急联系人
				{ path: 'scan', component : creditScan },					//人脸识别
				{ path: 'work', component : creditWork},					//工作信息
				{ path: 'bankInfo', component : creditBank},				//银行卡--信息
				{ path: 'support', component : supportBank},				//银行卡--支持
				{ path: 'bankHelp', component : creditBankHelp},			//银行卡--帮助
				{ path: 'bankSMS', component : creditBankSMS},				//银行卡--短信验证
				{ path: 'bankDetail', component : creditBankDetail},		//银行卡--详情
				{ path: 'mobile', component : creditMobile },				//手机认证
				{ path: 'idCard', component : checkIDcard},					//身份认证
				{ path: 'waterBank', component : waterBank},				//银行流水--选择银行
				{ path: 'waterLogin/:index', component : waterLogin},		//银行流水--帐号登录
				{ path: 'sbsqCity', component : sbsqCity},					//社保授权--城市
				{ path: 'sbsqLogin', component : sbsqLogin},				//社保授权--登录
				{ path: 'gjjCity', component : gjjCity},					//公积金授权--城市
				{ path: 'gjjLogin', component : gjjLogin},					//公积金授权--登录
				{ path: 'zhima', component : creditZM},						//芝麻认证
				{ path: 'alipay', component : creditAlipay},				//支付宝认证
				{ path: 'otherData', component : creditOther},				//其它资料
				{ path: 'uploadPic/:param', component : creditUpload}		//上传图片
			]},
			
			{ path: 'creditReport', component : home , children:[		//信用报告系列页面
				{ path: '/', component : reportIndex},					//默认--信用报告首页
				{ path: 'login', component : reportLogin},				//------登录
				{ path: 'get', component : reportGet},					//------获取
				{ path: 'sms', component : reportSMS},					//------短信验证
				{ path: 'answers', component : reportAns},				//------身份问题验证
				{ path: 'cover', component : reportCover},				//------报告封面
				{ path: 'list', component : reportList},				//------报告列表
				{ path: 'detail', component : reportDetail},			//------报告详情
				{ path: 'helps', component : reportHelp},				//------帮助中心
				{ path: 'regHow', component : reportRegHow},			//------如何注册
				{ path: 'regStep1', component : reportRStep1},			//------注册步骤1
				{ path: 'regStep2', component : reportRStep2}			//------注册步骤2
			]}
		]}
	],
	scrollBehavior:function(to,from,savedPosition){
		return { "x":0 , "y": 0 }
	}
})

//全局用变量名代码路径
//import routerJson from './data/router.json';
//Vue.prototype.urls = function(val){
//	return routerJson[val];
//};


//引入全局组件
import topComponent from "./components/common/top";
import footComponent from "./components/common/footer"
import listComponent from "./components/common/list";
import dialogPopup from "./components/popup/dialog";
import alertKnow from "./components/popup/alertKnow";
import alertTips from "./components/popup/alertTips";
import alertCheck from "./components/popup/alertCheck";		
import delayTime from "./components/popup/delay";			//黑底圆圈转转
import pageError from "./components/common/pageError";		//页面报错（页面中）
import noNextMore from "./components/common/noMore";		//没有可以加载的内容了
import sendSMS from "./components/common/sendSMS";		//发送验证码

//全局组件在此注册
Vue.component('topComponent', topComponent);
Vue.component('footComponent', footComponent);
Vue.component('listComponent', listComponent);
Vue.component('dialogPopup', dialogPopup);
Vue.component('alertKnow', alertKnow);
Vue.component('alertTip', alertTips);
Vue.component('alertCheck', alertCheck);
Vue.component('delayTime', delayTime);
Vue.component('pageError', pageError);
Vue.component('noMore', noNextMore);
Vue.component('sendSMS', sendSMS);

//user-borrow子路由中使用的全局组件
import borrowTitle from './components/borrow/title';
import borrowContent from './components/borrow/list';
Vue.component('borrowTitle', borrowTitle);
Vue.component('borrowList', borrowContent);
//user-reward子路由中使用的全局组件
import rewardTitle from './components/reward/title';
import rewardContent from './components/reward/list';
Vue.component('rewardTitle', rewardTitle);
Vue.component('rewardList', rewardContent);
//loan-detail子路由中使用的全局组件
import loanBannerCon from "./components/loan/top";
import loanDetailCon from "./components/loan/detail";
Vue.component('loanBanner', loanBannerCon);
Vue.component('loanDetail', loanDetailCon);



//全局过滤器用于select计算[普通select-val-txt]
Vue.filter('optionTxt',function(value,obj){
	var newObj = {};
	var checkVal = /请选择/;
	if(checkVal.test(value) || value=== '') return value;
	else{
		for(var i = 0; i < obj.length; i ++) newObj[obj[i].val] = obj[i].txt;
		return newObj[value];
	}
})
//全局过滤器用于显示手机号码中间4位*号[telphone-133****1234]
Vue.filter('filterPhone',function(value){
	if(value !== undefined){
		var start = value.substring(0,3),
			end = value.substring(7,11);
		return start+'****'+end;
	}
})

//全局函数-跳转至相应协议页
Vue.prototype.goAgreem = function(href){
	console.log('暂时还没有链接，先随便跳个链接');
	this.$router.push(href);
}
//跳转完成

//数组对象排序[根据key降序]
	Vue.prototype.jsonSort = function(data,key){
		//数组对象data按照key值进行排序
	    for(var j=1,jl=data.length;j < jl;j++){
	        var temp = data[j],
	            val  = temp[key],
	            i    = j-1;
	        while(i >=0 && data[i][key]>val){
	            data[i+1] = data[i];
	            i = i-1;    
	        }
	        data[i+1] = temp;
	    }
	    return data;
	}
//数组对象排序完成

//dialog组件事件
	Vue.prototype.callDialog = function(msg,cls,time){
		if(cls === undefined) cls = 'sort';
		if(time === undefined) time = 1200;
		this.diglogShow = true;			//显示组件
		this.diglogCont = msg;			//弹出消息内容
		this.diglogClass = cls;			//弹出内容样式
		var that = this;
		setTimeout(function(){
			that.diglogShow = false;	//根据传入time(如2000即2S后)隐藏组件
		},time);
	}
//dialog组件事件完成

//alertKnow组件
	//数据
	import knowDatas from './data/alertKnow.json';
	//事件
	Vue.prototype.alertKnow = function(val){
		for(var i = 0; i < knowDatas.length; i++){
			if(knowDatas[i].name == val){
				this.knowTit = knowDatas[i].title;
				this.knowCon = knowDatas[i].content;
				this.knowShow=true;
			}
		}
	}
//alertKnow组件

//提交意见200字
	//textarea获取焦点时-->判断是否为默认值
	Vue.prototype.textFocus = function(){
		if(this.textArea == this.defaultVal)  this.textArea = '';
		this.isDefault=false;
	}
	//textarea离开焦点时-->判断是否为空
	Vue.prototype.textBlur = function(){
		if(this.textArea == '') {
    		this.isDefault = true;
    		this.textArea = this.defaultVal;
    	}
	}
	//textarea发生变化时[需监听-执行]-->更新还可输入的文字个数
	Vue.prototype.changeText = function(){
		if(this.textArea != this.defaultVal){
    		if(this.textArea.length <= 200 ) this.textNum = 200-this.textArea.length;
    		else this.textArea = this.textArea.substring(0,200);
    	}
	}
//提交意见200字完成




var app = new Vue({
	router,
	render: h => h(home)
}).$mount('#app')