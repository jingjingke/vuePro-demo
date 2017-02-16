<template>
	<div class="container">
		<topComponent title='央行征信登录'></topComponent>
		<ul class="formCom form-report mt20">
			<li class="user">
				<label>
					<input type="text" placeholder="请输入登录名" v-model.trim='name'>
				</label>
			</li>
			<li class="pass">
				<label>
					<input type="password" placeholder="请输入密码" v-model.trim='pass'>
				</label>
			</li>
			<li class="safe">
				<label>
					<input type="text" placeholder="请输入验证码" v-model.trim='code'>
				</label>
				<canvas id="canvas" class="code-img" @click='changeCode'></canvas>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goSubmit'>确定提交</span>
		</div>
		<div class="btnWarp">
			<span class="subBtn blueLight" @click="$router.push('regStep1')">注册征信查询账号</span>
		</div>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	        	name:'',
	        	pass:'',
	        	code:'',
	        	canvas:{}			//存放canvas DOM节点
	        }
	    },
	    methods :{
	    	goSubmit(){
	    		console.log('待开发')
	    	},
	    	changeCode(){
	        	//点击刷新二维码
	        	this.canvasCode.createCode(this.canvas);
	        }
	    },
	    mounted:function(){
	    	this.canvas = document.getElementById('canvas');
	    	this.changeCode();
	    }
	}
</script>