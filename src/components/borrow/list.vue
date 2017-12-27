<template>
  <ul class="borrowList">
    <li v-for='data in items' @click='goDetail(data.id)'>
      <p class="fz26 w60P">编号<span>{{data.orderNo}}</span></p>
      <p>项目状态<span class="blue">{{data.statusStr}}</span></p>
      <p class="w60P col6">申请金额<span>{{data.applyAmount}}元</span></p>
      <p class="col6">借款期限<span>{{data.borrowLimit}}天</span></p>
    </li>
  </ul>
</template>
<script>
  export default {
    props: ['items'],
    methods: {
      goDetail(id) {
        // 根据转入id跳转到相应的详情页面
        this.$router.push('/user/borrowDetail/' + id)
      }
    }
  }
</script>
