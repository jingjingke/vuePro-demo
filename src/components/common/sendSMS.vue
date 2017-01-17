<template>
	<div :class='[smsCls,{grayBg:auto}]' @click='getSMS'>{{smsBtn}}</div>
</template>
<script>
	export default {
		data(){
			return {
				smsBtn:'',		//按钮文字
				smsCls:'',		//按钮样式
				smsNum:0,		//倒计时时间
				deNum:0,		//默认倒计时时间
				auto:false,		//开关--在倒计时
			}
		},
	    methods :{
	    	getSMS(){
	        	if(this.auto === false){
	        		this.$emit('sentAjax');		//发ajax
	        		var that = this;
	        		that.auto = true;
	        		that.smsBtn = that.smsNum + "秒后重发";
	        		var smstimeout = setInterval(function(){
	        			that.smsNum--;
	        			that.smsBtn = that.smsNum + "秒后重发";
	        			if(that.smsNum == 0){
	        				clearInterval(smstimeout);
	        				that.smsBtn = '重新发送';
	        				that.smsNum = that.deNum;
	        				that.auto = false;
	        			}
	        		},1000);
	        	}
	        }
	    },
	    props:['cls','btn','time','timeOut'],
	    mounted:function(){
	    	//根据是否传递值来将一系列进行默认值赋值
	    	this.smsCls = this.$options.propsData.cls === undefined ? 'code-sms' : this.$options.propsData.cls;
	    	this.smsBtn = this.$options.propsData.btn === undefined ? '点击发送' : this.$options.propsData.btn;
	    	this.smsNum = this.$options.propsData.time === undefined ? 60 : this.$options.propsData.time;
	    	this.deNum = this.$options.propsData.time === undefined ? 60 : this.$options.propsData.time;
	    	//传递是否自动倒计时[即timeOut传入true时就立即执行倒计时操作]
	    	if(this.$options.propsData.timeOut == 'true') 	this.getSMS();
	    }
	}
</script>