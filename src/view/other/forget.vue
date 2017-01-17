<template>
	<div class="container bgF">
		<topComponent title='忘记密码' back='取消'></topComponent>
		<ul class="formCom form-login form-mini mt10">
			<li>
				<label>
					<span>帐号</span>
					<input type="number" placeholder="请输入手机号" v-model.number='phone' />
				</label>
			</li>
			<li>
				<label>
					<span>验证码</span>
					<input type="number" placeholder="请输入短信验证码" v-model.trim='sms'>
				</label>
				<sendSMS @sentAjax='smsAjax'></sendSMS>
			</li>
			<li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
				<label>
					<span>设置密码</span>
					<input type="password" placeholder="请输入6-12位数字与字母组合密码" 	v-model.trim='pwd'	v-if='showPwd'>
					<input type="text" placeholder="请输入6-12位数字与字母组合密码" 		v-model.trim='pwd'	v-if='!showPwd'>
					<i @click='showPwd = !showPwd'></i>
				</label>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goSubmit'>完成</span>
		</div>
		<transition name="scale">
			<dialogPopup :class='diglogClass' :msg='diglogCont' v-show='diglogShow'></dialogPopup>
		</transition>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	        	phone:'',
	        	pwd:'',
	        	sms:'',
				showPwd:true,		//开关--明文显示密码
	        	diglogShow:false,	//开关--显示diglog组件
	        }
	    },
	    methods :{
	    	goSubmit(){
	    		var checkPhone = /^[1][3578][0-9]{9}$/,
	        		checkPwd = /^[\d\D]{6,12}$/,
	        		checkSMS = /^[0-9]{4,8}$/;
	        	//先做一些简单的判断再提交ajax
	        	if( checkPhone.test(this.phone) == false )		this.callDialog('手机格式不正确');
	        	else if( checkSMS.test(this.sms) == false )		this.callDialog('验证码不正确');
	        	else if( checkPwd.test(this.pwd) == false )		this.callDialog('密码格式不正确');
	        	else{
	        		//暂代，后期ajax
	        		this.$router.push('/login'); 
	        	}
	    	},
	        smsAjax(){
	    		console.log('在此发送短信ajax--组件中已$emit该函数');
	    	}
	    }
	}
</script>