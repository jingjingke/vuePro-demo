import Vue from 'vue';

//引入弹出文字说明框的具体数据
import knowDatas from './../data/alertKnow.json';
//引入canvas验证码用于全局
import canvasCode from './../assets/lib/canvasCode';

var methods={
	jsonSort:function(data,key){	//数组对象data按照key值进行排序
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
	},
	callDialog:function(msg,cls,time){	//dialog组件事件
		if(cls === undefined) cls = 'sort';
		if(time === undefined) time = 1200;
		this.diglogShow = true;			//显示组件
		this.diglogCont = msg;			//弹出消息内容
		this.diglogClass = cls;			//弹出内容样式
		setTimeout(()=>{
			this.diglogShow = false;	//根据传入time(如2000即2S后)隐藏组件
		},time);
	},
	alertKnow:function(val){	//弹窗文字说明框
		for(var i = 0; i < knowDatas.length; i++){
			if(knowDatas[i].name == val){
				this.knowTit = knowDatas[i].title;
				this.knowCon = knowDatas[i].content;
				this.knowShow=true;
			}
		}
	},
	textFocus:function(){	//意见反馈--获取焦点时
		if(this.textArea == this.defaultVal)  this.textArea = '';
		this.isDefault=false;
	},
	textBlur:function(){	//意见反馈--离开焦点时
		if(this.textArea == '') {
    		this.isDefault = true;
    		this.textArea = this.defaultVal;
    	}
	},
	changeText:function(){	//意见反馈--文本变化时
		if(this.textArea != this.defaultVal){
    		if(this.textArea.length <= 200 ) this.textNum = 200-this.textArea.length;
    		else this.textArea = this.textArea.substring(0,200);
    	} 
	},
	goAgreem:function(href){
		console.log('暂时还没有链接，先随便跳个链接');
		this.$router.push(href);
	},
	//全局校验输入字符串(例:用户名、密码、意见反馈等)
	checkRE:{
		phone:/^[1][3578][0-9]{9}$/,
		pwd:/^[\d\D]{6,12}$/,
		imgcode:/^[A-Za-z0-9]{4,6}$/
	},
	canvasCode:canvasCode
}

export default methods;