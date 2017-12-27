<template>
	<div class="alertCheck">
		<div class="alertCheckCon">
			<p class="tipTit">{{data.title}}</p>
			<p class="conDetail" v-html='data.content'></p>
			<p class="alertBtns" :class='{ two : hasTwo }'>
				<span class="btn cancelBtn" @click='btnClick1'>{{btnTxt1}}</span>
				<span class="btn" :class='{ line : hasTwo }' @click='btnClick2'>{{btnTxt2}}</span>
			</p>
		</div>
	</div>
</template>
<script>
	// 引入json
	import alertData from "../../data/alertCheck.json"

	export default {
		data() {
			return {
				data: {},
				hasTwo: false,
				btnTxt1: '',
				btnTxt2: ''
			}
		},
		props: ['name'],
		methods: {
			btnClick1() {
				this.$emit('btnClick1')
			},
			btnClick2() {
				this.$emit('btnClick2')
			}
		},
		mounted: function() {
			// 拉取数据
			this.data = alertData[this.$options.propsData.name]
			// 判断显示是否为两个按钮
			if(this.data.btn.length === 2) this.hasTwo = true;
			// 按钮1文字
			this.btnTxt1 = this.data.btn[0];
			// 按钮2文字
			if(this.hasTwo === true) this.btnTxt2 = this.data.btn[1]
		}
	}
</script>
