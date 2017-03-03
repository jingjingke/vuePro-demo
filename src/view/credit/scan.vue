<template>
	<div class="container bgF">
		<topComponent title='人脸识别'></topComponent>
		<p class="listTop">需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成。</p>
		<p class="listTop">{{tip}}</p>
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
				diglogShow:false, 	//开关--显示diglog组件
				tip:''
			}
		},
		methods:{
			goSave(){
				//需要对接第三方接口，模拟完成吧
				this.$store.commit('uploadCreditStatu',{name:'userScan',val:true});
	        	this.$store.commit('uploadCreditData',{name:'userScan',val:true});
        		this.callDialog("识别完成","true",2000);
        		setTimeout(()=>{
        			this.$router.back();
        		},2000);
			}
		},
		mounted:function(){
	    	//页面加载时
	    	if(this.$store.state.creditStatus['userScan'] === true){
	    		if(this.$store.state.creditDatas['userScan'] !== undefined){
					this.tip = '之前已经完成了认证';	    			
	    		}else{
	    			//如果vuex中未存储数据则发送ajax
	    			console.log('发送ajax')
	    		}
	    	}
	    }
	}
</script>