<template>
	<div class="container">
		<topComponent title='身份验证'></topComponent>
		<div class="reportProblem">
			<dl v-for='data in datas' :class='{open:data.show}' @click='data.show = !data.show'>
	    		<dt>{{data.title}}</dt>
	    		<dd v-html='data.detail'></dd>
	    	</dl>
		</div>
	</div>
</template>
<script>
	import helpDatas from '../../../data/reportHelps.json';
	
	export default {
	    data () {
	        return {
	            datas:[]
	        }
	    },
	    mounted:function(){
	    	//拉取数据
	    	this.datas = helpDatas;
	    }
	}
</script>
