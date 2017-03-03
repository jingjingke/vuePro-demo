<template>
	<div class="container bgF">
		<topComponent title='注册' back='登录'></topComponent>
		<h2 class="logoIcon">草根金融</h2>
		<ul class="formCom form-login">
			<li>
				<label>
					<span>手机号</span>
					<input type="number" placeholder="请输入手机号" v-model.number='phone' />
				</label>
			</li>
			<li>
				<canvasCode @codeHasChange='sendCode' name='图片验证码'></canvasCode>
			</li>
			<li>
				<label>
					<span>短信验证码</span>
					<input type="number" placeholder="请输入短信验证码" v-model.number='smsCode'>
				</label>
				<sendSMS @sentAjax='smsAjax'></sendSMS>
			</li>
			<li :class='[{"icon-eye1":showPwdOne},{"icon-eye2":!showPwdOne}]'>
				<label>
					<span>登录密码</span>
					<input type="password" placeholder="请输入6-12位密码" v-model.trim='pwdOne' v-if='showPwdOne'>
					<input type="text" placeholder="请输入6-12位密码" v-model.trim='pwdOne' v-if='!showPwdOne'>
					<i @click='showPwdOne = !showPwdOne'></i>
				</label>
			</li>
			<li :class='[{"icon-eye1":showPwdTwo},{"icon-eye2":!showPwdTwo}]'>
				<label>
					<span>确认密码</span>
					<input type="password" placeholder="请输入6-12位确认密码" v-model.trim='pwdTwo' v-if='showPwdTwo'>
					<input type="text" placeholder="请输入6-12位确认密码" v-model.trim='pwdTwo' v-if='!showPwdTwo'>
					<i @click='showPwdTwo = !showPwdTwo'></i>
				</label>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn"	:class='{grayBg:!checked}'	@click='goReg'>立即注册</span>
		</div>
		<div class="agreeMent mt20"	:class='{ no : !checked }'	@click='checked = !checked'>
			我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《草根信贷用户协议》</span>
			<input type="checkbox" v-model="checked">
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
				imgCode:'',
				smsCode:'',
				pwdOne:'',
				pwdTwo:'',
				checked:true,		//是否同意协议
				showPwdOne:true,	//开关--明文显示第一个密码
				showPwdTwo:true,	//开关--明文显示第二个密码
	        	diglogShow:false,	//开关--显示diglog组件
	        	canvas:{}			//存放canvas DOM节点
	        }
	    },
	    methods :{
	    	goReg(){
	    		var checkPhone = /^[1][3578][0-9]{9}$/,
	        		checkPwdOne = /^[\d\D]{6,12}$/,
	        		checkSMS = /^[0-9]{4,8}$/;
	        	//先做一些简单的判断再提交ajax
	        	if(this.checked === false)							this.callDialog('请阅读并同意协议');
	        	else if( checkPhone.test(this.phone) == false )		this.callDialog('手机格式不正确');
	        	else if(this.imgCode.toUpperCase() !== this.canvasCode.codeNums.toUpperCase())		this.callDialog('图片验证码不正确');
	        	else if( checkSMS.test(this.smsCode) == false )		this.callDialog('短信验证码不正确');
	        	else if( checkPwdOne.test(this.pwdOne) == false )	this.callDialog('密码格式不正确');
	        	else if( this.pwdTwo != this.pwdOne )				this.callDialog('确认密码不正确');
	        	else{
	        		//先由跳到登录页暂代，后期ajax
	        		this.$router.push('/login'); 
	        	}
	    	},
	    	smsAjax(){
	    		console.log('在此发送短信ajax--组件中已$emit该函数');
	    	},
	    	sendCode(val){
	        	this.imgCode = val;
	        }
	    }
	}
</script>