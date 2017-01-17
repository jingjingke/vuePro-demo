<template>
	<div class="container">
		<topComponent title='草根金融' :showLeft='false'></topComponent>
		<pageError :msg='sendMsg' class='error-page'></pageError>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				num:3,		//倒计时秒数,
				timeOut:{}	//定时器挂到VUE上
			}
		},
		computed:{
			sendMsg:function(){
				//计算返回传递给组件的消息内容
				return "页面不存在,"+this.num+"S后回到首页";
			}
		},
		mounted:function(){
			var that = this;
			//设置倒计时定时器
			that.timeOut = setInterval(function(){
				that.num--
				if(that.num==0){
					clearInterval(that.timeOut);
					that.$router.push('/');		
				}
			},1000)
		},
		beforeDestroy:function(){
			clearInterval(this.timeOut);	//页面销毁时同时清除定时器
		}
	}
</script>