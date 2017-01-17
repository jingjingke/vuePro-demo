<template>
	<div class="container">
		<topComponent title='必填资料'></topComponent>
		<div class="listTop"><p class="tCenter col9">草根金融承诺你的信息安全</p></div>
		<ul class="mustInfo">
            <li v-for="data of lists" :class="{lock:data.isLock, arrow:!data.isLock, wait:!data.isLock, ok:data.isOk }" @click='$router.push(data.push)'>
            	<i :class="data.icon"></i><span>{{data.step}}</span><b>{{data.tit}}</b>
            </li>
        </ul>
		<p class="infoLink tCenter"><span class="arrow" @click="$router.push('/loan/dataSelect')">选填资料</span>资料越完善，审核通过率越高，借款费用越低</p>
		<div class="btnWarp">
			<span class="subBtn" :class='{grayBg:!checked}' @click="goApply">申请借款</span>
		</div>
		<div class="agreeMent mt20"	:class='{ no : !checked }'	@click='checked = !checked'>
			我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《个人信息收集授权协议》</span>
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
	            checked:true,		//开关--同意协议
	        	diglogShow:false,	//开关--显示diglog组件
	        	diglogClass:'',
	        	diglogCont:'',
	        	lists:[
	        		{icon:'icon01',isLock:false,isOk:false,step:'第一步',tit:'身份认证',param:'userInfo',push:'/credit/userInfo'},
	        		{icon:'icon02',isLock:true,isOk:false,step:'第二步',tit:'人脸识别',param:'userScan',push:'/credit/scan'},
	        		{icon:'icon03',isLock:true,isOk:false,step:'第三步',tit:'紧急联系人',param:'userContacts',push:'/credit/contacts'},
	        		{icon:'icon04',isLock:true,isOk:false,step:'第四步',tit:'手机认证',param:'userPhone',push:'/credit/mobile'},
	        		{icon:'icon05',isLock:true,isOk:false,step:'第五步',tit:'工作信息',param:'userWork',push:'/credit/work'}
	        	]
	        }
	    },
	    methods:{
	    	goApply(){
	    		if(this.checked == false)				this.callDialog('请阅读并同意协议');
	    		else if(this.lists[0].isOk == false)	this.callDialog('请进行身份认证');
	    		else if(this.lists[1].isOk == false)	this.callDialog('请进行人脸识别');
	    		else if(this.lists[2].isOk == false)	this.callDialog('请填写紧急联系人');
	    		else if(this.lists[3].isOk == false)	this.callDialog('请进行手机认证');
	    		else if(this.lists[4].isOk == false)	this.callDialog('请填写工作信息');
	    		else{
	    			//暂代
	    			this.$router.push('/loan/submitApply');
	    		}
	    	},
	        showClass(arr){
	        	for(var i = 0; i < this.lists.length; i++){
					if(localStorage[this.lists[i].param] === undefined || localStorage[this.lists[i].param] === null){
						this.lists[i].isLock = false;
						break;
					}else{
						this.lists[i].isLock = false;
						this.lists[i].isOk = true;
					}
				}
	        }
	    },
	    computed:{
	    	//查看缓存
	    	watchLocal:function(){
	    		var obj={};
	    		for(var i = 0; i < this.lists.length; i++){
	    			obj[i] = (localStorage[this.lists[i].param] === undefined || localStorage[this.lists[i].param] === null)?false:true;
	    		}
	    		return obj;
	    	}
	    },
	    watch:{
	    	watchLocal:{
	    		handler:function(nowVal,oldVal){
	    			//观擦计算返回的新数据-->调用样式显示的函数
	    			if(nowVal !== oldVal) this.showClass( this.lists );
	    		},
	    		deep:true
	    	}
	    },
	    created(){
			//创建页面的时候先查看缓存中是否有值，将样式显示全
			this.showClass( this.lists );
	    }
	}
</script>