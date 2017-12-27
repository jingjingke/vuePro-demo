<template>
  <div class="container">
    <topComponent title='我的还款'>
      <span class="save" @click="$router.push('/user/repayRecord')" slot="right">还款记录</span>
    </topComponent>
    <template v-if='hasRecord' v-for='data in datas'>
      <div class="repayList">
        <p class="tit"><b class="fz28">还款日 {{data.planTime}}</b><em class="fr fz26 col6">{{data.periods}}期</em></p>
        <p class="tit"><em class="fz26 col6">已还款 {{data.hasRepay}}</em><b class="fr fz28">{{data.status | filterStatu}}</b></p>
        <p class="pt20">应还本金<span>{{data.principal}}</span></p>
        <p>应还利息<span>{{data.interest}}</span></p>
        <p>管理费<span>{{data.manageAmount}}</span></p>
        <p>逾期费用<span>{{data.breachAmount}}</span></p>
        <p>已还款<span>{{data.hasRepay}}</span></p>
        <p class="fz26 pt20 all">应还总额<span>{{data.totalAmount}}</span></p>
      </div>
      <span class="subBtn noRadius" @click="$router.push('/user/repayGo/'+data.id+'/'+data.totalAmount)">还款</span>
    </template>
    <pageError v-if='!hasRecord' :msg='recordTit' :class='recordCls'></pageError>
  </div>
</template>
<script>
  // 引入页面数据[该页面需要经过两次ajax]
  import repayList from '../../data/order/list2.json';        // 模拟获取订单ID号
  import orderDetail from '../../data/order/repay_list.json'; // 模拟订单ID号相应详情列表

  export default {
    data() {
      return {
        hasRecord: true,           // 开关-记录列表是否显示[默认有]
        recordTit: '暂无还款项目',   // 无记录时显示文字
        recordCls: 'error-record', // 无记录时组件样式
        datas: [],                 // 实际数据
        temp: []                   // 暂存数据
      }
    },
    filters: {
      filterStatu: function (val) {
        //根据状态数字返回相应文字
        if (val === 0) return "待归还";
        else if (val === 2) return "部分归还";
        else if (val === 3) return "已逾期";
      }
    },
    mounted() {
      // 先从待还的列表中获取待还的订单ID，再通过订单ID需取
      if (repayList.data.length !== 0) {
        // 先获取到所有待还的订单ID
        for (let i = 0; i < repayList.data.length; i++) {
          // 去根据订单ID[ repayList.data[i].id ] 去ajax所有待还订单详情
          // ....省略过程
          for (let j = 0; j < orderDetail.data.length; j++) {
            if (orderDetail.data[j].status !== 1) {
              this.temp.push(orderDetail.data[j]); //数据先暂存-->temp
              break;
            }
          }
        }
        this.datas = this.temp // 数据整理完成后填入datas中-->data
      } else {
        this.hasRecord = false
      }
    }
  }
</script>
