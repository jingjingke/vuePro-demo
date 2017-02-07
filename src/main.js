import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

//引用VUE模板
import home from './components/home';							//根目录
import routes from './router';

var router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:routes,
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