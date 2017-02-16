<template>
	<div class="container">
		<topComponent title='招商银行'></topComponent>
		<ul class="formCom form-fund mt20">
			<!--<li class="li-long">
				<label>
					<span>公积金帐号</span>
					<input type="text" placeholder="请输入银行卡号">
					<p class="tips-bg">注意：必须先开通网银，如未开通，请在官网开通网银功能</p>
				</label>
			</li>
			<li class="li-long">
				<label>
					<span>社保帐号</span>
					<input type="text" placeholder="请输入银行卡号">
					<p class="tips-nobg">如忘记密码请登录官网找回</p>
				</label>
			</li>-->
			<li>
				<label>
					<span>银行卡</span>
					<input type="text" placeholder="请输入银行卡号">
				</label>
			</li>
			<li>
				<label>
					<span>账号</span>
					<input type="text" placeholder="请输入身份证号/用户名">
					<p class="tips-bg">注意：必须先开通网银，如未开通，请在官网开通网银功能</p>
				</label>
			</li>
			<li>
				<label>
					<span>密码</span>
					<input type="text" placeholder="请输入登录密码">
					<p class="tips-nobg">如忘记密码请登录官网找回</p>
				</label>
			</li>
			<li>
				<label>
					<span>验证码</span>
					<input type="text" placeholder="请输入右侧验证码">
				</label>
				<canvas id="canvas" class="code-img" @click='changeCode'></canvas>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn">确认提交</span>
		</div>
		<p class="formTips">温馨提示：请确认您填写的信息为本人所有，填写他人信息可能出现授权失败</p>
	</div>
</template>
<script>
	export default {
		data () {
	        return {
	            canvas:{}	//存放canvas DOM节点
	        }
	    },
	    methods :{
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