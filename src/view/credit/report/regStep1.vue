<template>
	<div class="container">
		<topComponent title='注册征信查询账号'></topComponent>
		<div class="reportStepTit">
			<ul>
    			<li class="step01 ok"><i>1</i>填写信息</li>
    			<li class="step02"><i>2</i>补充信息</li>
    			<li class="step03"><i>3</i>完成注册</li>
    		</ul>
		</div>
		<ul class="formCom form-report mt20">
			<li class="user">
				<label>
					<input type="text" placeholder="请输入登录名" v-model.trim='name'>
				</label>
			</li>
			<li class="uid">
				<label>
					<input type="text" placeholder="请输入身份证号" v-model.trim='sid'>
				</label>
			</li>
			<li class="safe">
				<label>
					<input type="text" placeholder="请输入验证码" v-model.trim='code'>
				</label>
				<div class="code-img"><img src="https://cgtzfiles.b0.upaiyun.com/style3/bbs/cgtz/images/adv_2.jpg"></div>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goNext'>下一步</span>
		</div>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	            name:'',
	            sid:'',
	            code:''
	        }
	    },
	    methods :{
	    	goNext(){
	    		console.log('未发开，直接跳路由');
	    		this.$router.push('regStep2');
	    	}
	    }
	}
</script>