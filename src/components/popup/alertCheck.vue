<template>
	<div class="alertCheck">
    	<div class="alertCheckCon">
    		<p class="title">本次操作需要验证，请输入验证信息。</p>
    		<ul class="forms">
    			<li>
    				<input type="text" placeholder="请输入短信验证码" class="inputType1" v-model.trim='smsCode'>
    				<div class="checkCode" :class='{grayBg:smsTime}' @click='getSMS'>{{smsBtn}}</div>
    			</li>
    			<li class="liWarp">
    				<input type="text" placeholder="请输入验证码" class="inputType2">
    				<div class="checkImg"><img src="http://file01.16sucai.com/d/file/2013/0612/20130612092046234.jpg"></div>
    			</li>
    		</ul>
    		<div class="alertBtns two">
    			<span class="btn cancelBtn" @click='goHide'>取消</span>
    			<button class="btn bold line" @click='goSubmit'>确定</button>
    		</div>
    	</div>
    	<delayTime v-if='showDelay'></delayTime>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				smsCode:'',
				smsBtn:'60秒后重发',
				smsNum:60,
				smsTime:true,
				showDelay:false
			}
		},
	    props:['phone'],
	    methods:{
	    	goHide(){
	    		this.$emit('hide');
	    	},
	    	goSubmit(){
	    		var checkCode = /^[0-9]{6,8}$/;
	    		if(checkCode.test(this.smsCode) == false) this.callDialog(this,"短信验证码错误");
	    		else{
	    			this.showDelay = true;
	    			var that = this;
	    			setTimeout(function(){
	    				that.$emit('success');
	    			},2000);
	    		}
	    	},
	    	getSMS(){
	        	if(this.smsTime === false){
	        		var that = this;
	        		that.smsTime = true;
	        		that.smsBtn = that.smsNum + "秒后重发";
	        		var smstimeout = setInterval(function(){
	        			that.smsNum--;
	        			that.smsBtn = that.smsNum + "秒后重发";
	        			if(that.smsNum == 0){
	        				clearInterval(smstimeout);
	        				that.smsBtn = '重新发送';
	        				that.smsNum = 60;
	        				that.smsTime = false;
	        			}
	        		},1000);
	        	}
	        }
	    },
	    mounted:function(){
	    	if(this.smsTime === true){
        		var that = this;
        		that.smsTime = true;
        		that.smsBtn = that.smsNum + "秒后重发";
        		var smstimeout = setInterval(function(){
        			that.smsNum--;
        			that.smsBtn = that.smsNum + "秒后重发";
        			if(that.smsNum == 0){
        				clearInterval(smstimeout);
        				that.smsBtn = '重新发送';
        				that.smsNum = 60;
        				that.smsTime = false;
        			}
        		},1000);
        	}
	    }
	}
</script>