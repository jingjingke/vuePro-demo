<template>
  <div class="container">
    <topComponent title='借款详情'>
      <span class="save" @click="$router.push('/user/repayRecord')" slot='right'>还款记录</span>
    </topComponent>
    <div class="borrowInfoDetail">
      <p>收款银行卡<i class='queryIcon' @click='alertKnow("skyhk")'>?</i><span>562365411956231256</span></p>
      <p>开户行省市 <span>浙江省杭州市</span></p>
      <p>开户行<span>建设银行</span></p>
      <p>开户行支行<span>萍水西街支行萍水西街支行萍水西街支行萍水西街支行</span></p>
      <p>保证金(元)<span>200</span></p>
    </div>
    <alertKnow v-if='knowShow' :title='knowTit' :content='knowCon' @goHide='knowShow = !knowShow'></alertKnow>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        knowShow: false
      }
    }
  }
</script>
