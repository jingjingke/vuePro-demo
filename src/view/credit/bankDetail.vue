<template>
  <div class="container">
    <div class="top">
      <span class="back" @click='goBack'>返回</span>
      <h1>银行卡详情</h1>
    </div>
    <!-- 标题 -->
    <div class="bankList bank60 mt20">
      <b>建设银行</b>
      <em>尾号 2118</em>
      <b class="bank-pay2 blue">收款卡</b>
    </div>
    <!-- 详情 -->
    <dl class="bankDetail mt20">
      <dt>开户行详情</dt>
      <dd>开户省市<b>浙江省杭州市</b></dd>
      <dd>开户行<b>中国建设银行股份有限公司杭州文新支行</b></dd>
    </dl>
    <!-- 说明 -->
    <div class="explain mt40">
      说明：<br>1、借款成功后，我们的财务给您打款时，会打到这张银行卡中<br>2、如果要修改分支行信息或者需要更换“收款卡”，请联系我们的客服人员400-877-0890
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goBack() {
        this.$router.back()
      }
    }
  }
</script>
