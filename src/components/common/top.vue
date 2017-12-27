<template>
  <div class="top">
    <span class="back" @click='goBack' v-if='iSshow'>{{backTit}}</span>
    <slot name="left"></slot>
    <h1>{{title}}</h1>
    <slot name="right"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        backTit: '返回',
        iSshow: true
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    },
    props: ['title', 'back', 'showLeft'],
    mounted: function () {
      // 如果传递了back,则左侧返回文字显示的是传入的值
      if (this.$options.propsData.back !== undefined) this.backTit = this.$options.propsData.back;
      // 如果传递了showLeft(默认是true),则该值决定左侧是否显示
      if (this.$options.propsData.showLeft !== undefined) this.iSshow = this.$options.propsData.showLeft;
    }
  }
</script>
