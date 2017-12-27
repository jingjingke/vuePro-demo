<template>
  <div class="container">
    <topComponent title='确认信息'>
      <span class="back" slot='left' @click='goBack'>返回</span>
    </topComponent>
    <div class="successTips tips-record">
      <p class="tCenter">您本次还款<span class="red">3018.00</span>元 的申请已提交<br>后台正在处理...</p>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goBack() {
        //确认信息暂时返回到我的还款列表页(即需后退两步)
        this.$router.go(-2)
      }
    }
  }
</script>
