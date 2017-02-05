<template>
	<div class="container bgF">
		<topComponent title='人脸识别'></topComponent>
		<p class="listTop">需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成。</p>
		<div class="btnWarp">
			<span class="subBtn" @click='goSave'>假设完成</span>
		</div>
		<transition name="scale">
			<dialogPopup :class='diglogClass' :msg='diglogCont' v-show='diglogShow'></dialogPopup>
		</transition>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				diglogShow:false 	//开关--显示diglog组件
			}
		},
		methods:{
			goSave(){
				//需要对接第三方接口，模拟完成吧
				localStorage.setItem('userScan','Yes');
        		this.callDialog("识别完成","true",2000);
        		setTimeout(()=>{
        			this.$router.back();
        		},2000);
			}
		}
	}
</script>