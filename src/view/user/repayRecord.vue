<template>
  <div class="container">
    <topComponent title='还款记录'></topComponent>
    <ul class="repayRecord" v-if='hasRecord'>
      <li v-for="data in datas">
        <p><span class="money">{{data.repayAmount}}</span><span class="fr col6">{{data.periods}}期</span></p>
        <p>{{data.repayTime}}<span class="fr">{{data.orderNo}}</span></p>
      </li>
    </ul>
    <pageError v-if='!hasRecord' :class='recordCls'>
      <template slot='cont'>还没有任何还款记录哦<br><span class="link" @click="$router.push('/loan')">去申请借款吧</span></template>
    </pageError>
  </div>
</template>
<script>
  // 引入页面数据
  import repayList from '../../data/repay/repay_list.json';

  export default {
    data() {
      return {
        hasRecord: true,
        recordCls: 'error-repay',
        datas: []
      }
    },
    mounted() {
      // 模拟获取数据并判断
      if (repayList.data.length !== 0) this.datas = this.jsonSort(repayList.data, 'repayTime'); // 根据-->时间升序
    }
  }
</script>
