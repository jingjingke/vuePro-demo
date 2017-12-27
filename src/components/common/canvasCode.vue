<template>
  <div>
    <label>
      <span v-if='titShow'>{{title}}</span>
      <input type="text" :placeholder="deVal" v-model.trim='code' :class='inputCls'>
    </label>
    <canvas id="canvas" :class="canCls" @click='changeCode'></canvas>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        canvas: {},
        code: '',
        title: '',
        deVal: '',
        titShow: true,
        inputCls: '',
        canCls: '',
      }
    },
    props: ['name', 'placeh', 'isTit', 'iCls', 'cCls'],
    methods: {
      changeCode() {
        this.canvasCode.createCode(this.canvas)
      },
      watchCode() {
        this.$emit('codeHasChange', this.code)
      }
    },
    watch: {
      'code': 'watchCode'
    },
    mounted() {
      // 判断标题和占位符是否传递
      this.title = this.$options.propsData.name === undefined ? '验证码' : this.$options.propsData.name;
      this.deVal = this.$options.propsData.placeh === undefined ? '请输入图形验证码' : this.$options.propsData.placeh;
      this.inputCls = this.$options.propsData.iCls === undefined ? '' : this.$options.propsData.iCls;
      this.canCls = this.$options.propsData.cCls === undefined ? 'code-img' : this.$options.propsData.cCls;
      if (this.$options.propsData.isTit === 'false') this.titShow = false;
      // 获取节点并且刷新一次canvas
      this.canvas = document.getElementById('canvas');
      this.changeCode()
    }
  }
</script>
