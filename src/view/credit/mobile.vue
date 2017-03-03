<template>
	<div class="container">
		<topComponent title='手机认证'></topComponent>
		<i class="mobileIcon"></i>
		<ul class="formCom form-untitled">
			<li>
				<label>
					<input type="text" v-model='data.phone' readonly>
				</label>
			</li>
			<li>
				<label>
					<input type="text" placeholder="请输入服务密码" v-model.trim='data.pass'>
				</label>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goSend'>确认</span>
		</div>
		<p class="formTips tCenter"><span class="col6">忘记服务密码，请拨打</span><span class="blue txtline">手机运营商客服电话</span><span class="col6">进行重置</span></p>
		<alertCheck v-if='alertshow' :phone='data.phone' @hide="alertshow = !alertshow" @success='goSubmit'></alertCheck>
		<transition name="scale">
			<dialogPopup :class='diglogClass' :msg='diglogCont' v-show='diglogShow'></dialogPopup>
		</transition>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	            //数据
	            alertshow:false,
	            data:{
	            	phone:'',
	            	pass:''
	            },
	            diglogShow:false,	//开关--显示diglog组件
	        }
	    },
	    methods :{
	    	goSend(){
	    		var checkPass = /^[0-9]{6,8}$/;
	    		if(checkPass.test(this.data.pass) === false) this.callDialog("密码格式不正确")
	    		else this.alertshow = true;
	    	},
	    	goSubmit(){
	    		this.$store.commit('uploadCreditStatu',{name:'userPhone',val:true});
	    		this.alertshow = !this.alertshow;
	    		this.callDialog("手机认证成功","true",1500)
	    		setTimeout(()=>{
	    			this.$router.back();
	    		},1500);
	    	}
	    },
	    mounted:function(){
	    	//页面加载时
	    	this.data.phone = '15012345678';	//登录帐号即手机号
	    }
	}
</script>