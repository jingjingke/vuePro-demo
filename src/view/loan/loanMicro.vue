<template>
  <div class="container no-top">
    <loanBanner :tit='title' :des='content'>
      <img src="../../assets/img/loanBanner1.jpg" slot='banner'/>
    </loanBanner>
    <loanDetail uid='micro'>
      <span class="subBtn" slot="apply" @click="goFillData">申请借款</span>
    </loanDetail>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: "微额借款",
        content: "应急首选，解你燃眉之急"
      }
    },
    methods: {
      goFillData() {
        // 填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
        // this.$router.push('/loan/dataComm')
        this.$router.push('/loan/dataMust')
      }
    }
  }
</script>
