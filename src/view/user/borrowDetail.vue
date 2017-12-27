<template>
  <div class="container">
    <topComponent title='借款详情'>
      <span class="save" @click="$router.push('/user/repayRecord')" slot='right'>还款记录</span>
    </topComponent>
    <div class="borrowInfoTit">
      <template v-if='data.repayType === 2'>
        <dl>
          <dt>还款方式<span class="col3">一次性还本付息</span></dt>
          <dd>项目状态<span class="blue">{{data.statusStr}}</span></dd>
        </dl>
        <ul>
          <li><b>{{data.interestAmount?data.interestAmount:'待定'}}</b>利息金额(元)</li>
          <li><b>{{nextRefundDate}}</b>还款日</li>
          <li><b>{{data.interestAmount?data.interestAmount:'待定'}}</b>授信金额(元)<i class='queryIcon'
                                                                               @click='alertKnow("sxje")'>?</i></li>
        </ul>
      </template>
      <template v-else>
        <dl>
          <dt>还款方式<span class="col3">等额本息</span></dt>
          <dd>项目状态<span class="blue">{{data.statusStr}}</span></dd>
        </dl>
        <ul>
          <li><b>{{data.nextAmountNeed?data.nextAmountNeed:'待定'}}</b>应还金额(元）</li>
          <li><b>{{nextRefundDate}}</b>下一个还款日</li>
          <li><b>{{data.borrowAmount?data.borrowAmount:'待定'}}</b>授信金额(元)<i class='queryIcon' @click='alertKnow("sxje")'>?</i></li>
        </ul>
      </template>
    </div>
    <ul class="listCom list-arrow list-mini no-top">
      <li @click='goMore'>更多详情</li>
    </ul>
    <ul class="listCom list-arrow list-mini no-top mt20" v-if='data.operates ===""'>
      <li @click='goReason' v-if="checkOperates(data.operates,'failReason')">查看理由</li>
      <li @click='goDeal' v-if="checkOperates(data.operates,'view_contact')">查看合同</li>
      <li @click='goRepay' v-if="checkOperates(data.operates,'repay')">还款</li>
      <!--<li>确认信息</li>-->
    </ul>
    <alertKnow v-if='knowShow' :title='knowTit' :content='knowCon' @goHide='knowShow = !knowShow'></alertKnow>
  </div>
</template>
<script>
  //引入页面数据
  import myData from '../../data/order/detail4web.json';

  export default {
    data() {
      return {
        data: {},
        knowShow: false,
      }
    },
    methods: {
      goMore() {
        this.$router.push('/user/borrowDetail/' + this.$route.params.id + '/more');
      },
      goReason() {
        this.$router.push('/user/borrowReason/' + this.$route.params.id);
      },
      goDeal() {
        this.$router.push('/user/dealList');
      },
      goRepay() {
        this.$router.push('/user/repayGo');
      },
      checkOperates(str, val) {
        //检查operates可提供的接下来的操作，如查看合同，还款等
        if (str.indexOf(val) > -1) return true;
        else return false;
      }
    },
    computed: {
      //计算下一个还款日，根据返回的数据来
      nextRefundDate: function () {
        if (this.data.nextRefundDate === undefined) {
          if (this.data.status === 107 || this.data.status === 207) return "无";
          else return "待定";
        } else {
          return this.data.nextRefundDate
        }
      }
    },
    mounted() {
      //需要根据订单id来查询该页面详情[通过参数已传递过来]
      let pId = this.$route.params.id;
      //数据提取
      this.data = myData.data;
      this.$store.commit('addBorrow', {
        id: pId,
        val: JSON.stringify(this.data)
      })
    }
  }
</script>
