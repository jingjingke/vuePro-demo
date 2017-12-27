<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'></topComponent>
    <pageError :msg='sendMsg' class='error-page'></pageError>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 3,      //倒计时秒数,
        timeOut: {}  //定时器挂到VUE上
      }
    },
    computed: {
      sendMsg: function () {
        //计算返回传递给组件的消息内容
        return "页面不存在," + this.num + "S后回到首页"
      }
    },
    mounted() {
      //设置倒计时定时器
      this.timeOut = setInterval(() => {
        this.num--;
        if (this.num === 0) {
          clearInterval(this.timeOut)
          this.$router.replace('/')
        }
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timeOut)  //页面销毁时同时清除定时器
    }
  }
</script>
