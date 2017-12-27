<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
    </loanBanner>
    <loanDetail uid='large'>
      <span class="subBtn" slot="apply" @click="goFillData">申请借款</span>
    </loanDetail>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: "草根福利借款",
        content: "草根投资项目担保，费率超低"
      }
    },
    methods: {
      goFillData() {
        // 填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
        // this.$router.push('/loan/dataMust')
        this.$router.push('/loan/dataComm')
      }
    }
  }
</script>
