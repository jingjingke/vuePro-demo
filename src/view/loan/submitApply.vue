<template>
	<div class="container">
		<topComponent title='提交申请' class='top-icon'>
			<i class="recom" @click="$router.push('/loan/loanRecom')" slot='right'></i>
		</topComponent>
		<ul class="formCom form-selectRight">
			<li class="icon-arrow">
				<span>还款方式</span>
				<p class="gray" :class='{ col6 : selectWay!="请选择" }'>{{selectWay | optionTxt(optionWay) }}</p>
				<select v-model='selectWay'>
					<option v-for="option of optionWay" :value='option.val'>{{option.txt}}</option>
				</select>
			</li>
			<li class="icon-arrow">
				<span>借款金额</span>
				<p class="gray" :class='{ col6 : selectAmount!="请选择" }'>{{selectAmount | optionTxt(optionAmount) }}</p>
				<select v-model='selectAmount'>
					<option v-for="option of optionAmount" :value='option.val'>{{option.txt}}</option>
				</select>
			</li>
			<li class="icon-arrow">
				<span>借款期限</span>
				<p class="gray" :class='{ col6 : selectLimit!="请选择" }'>{{selectLimit | optionTxt(optionLimit) }}</p>
				<select v-model='selectLimit'>
					<option v-for="option of optionLimit" :value='option.val'>{{option.txt}}</option>
				</select>
			</li>
			<li @click="$router.push('/loan/loanDes')">
				<span>借款描述</span>
			</li>
		</ul>
		<ul class="formCom form-selectRight mt30">
			<li class="icon-arrow">
				<span>方便联系时间段</span>
				<p class="gray" :class='{ col6 : selectTime!="请选择" }'>{{selectTime | optionTxt(optionTime) }}</p>
				<select v-model='selectTime'>
					<option v-for="option of optionTime" :value='option.val'>{{option.txt}}</option>
				</select>
			</li>
		</ul>
		<div class="btnWarp">
			<span class="subBtn" @click='goApply'>提交申请</span>
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
	            defaultSelect:'请选择',
	            selectWay:'',						//select-还款方式
	            optionWay:[							//option-还款方式
	            	{val:"1",txt:"一次性还本付息"},
	            	{val:"2",txt:"还本付息"}],
	            selectAmount:'',					//select-借款金额
	            optionAmount:[						//option-借款金额
	            	{val:'500',txt:'500元'},
	            	{val:'1000',txt:'1000元'}],
	            selectLimit:'',						//select-借款期限
	            optionLimit:[						//option-借款期限
	            	{val:'7',txt:'7天'},
	            	{val:'14',txt:'14天'},
	            	{val:'21',txt:'21天'}],
	            selectTime:'',						//select-时间段
	            optionTime:[						//option-时间段
	            	{val:'1',txt:'9:00-12:00'},
	            	{val:'2',txt:'12:00-14:00'},
	            	{val:'3',txt:'14:00-18:00'}],
	            	
	            diglogShow:false,					//开关----显示diglog组件
	        }	
	    },
	    methods :{
	        goApply(){	        	
	        	if(this.selectWay == this.defaultSelect )			this.callDialog('请选择还款方式');
	        	else if(this.selectAmount == this.defaultSelect)	this.callDialog('请选择借款金额');
	        	else if(this.selectLimit == this.defaultSelect)		this.callDialog('请选择借款期限');
	        	else if(localStorage['tempDesCont'] === undefined )	this.callDialog('请填写描述内容');
	        	else if(this.selectTime == this.defaultSelect)		this.callDialog('请选择时间段');
	        	else 												this.$router.push('/loan/sureMsg');
	        }
	    },
	    created(){
	    	//为下拉菜单设置默认值
	    	this.selectWay = this.defaultSelect;
	    	this.selectAmount = this.defaultSelect;
	    	this.selectLimit = this.defaultSelect;
	    	this.selectTime = this.defaultSelect;
	    }
	}
</script>