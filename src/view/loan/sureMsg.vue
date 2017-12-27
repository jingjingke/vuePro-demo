<template>
  <div class="container">
    <topComponent title='确认信息'>
      <span class="save" @click="$router.push('/loan/cancelSup')" slot='right'>取消上标</span>
    </topComponent>
    <div class="borrowInfoTit" v-if='isOnce'>
      <dl>
        <dt>项目编号<span class="col3">20151206100122</span></dt>
        <dd>借款期限(天)<span class="col3">270</span></dd>
      </dl>
      <ul>
        <li><b>2900</b>收款金额(元)<i class='queryIcon' @click='alertKnow("skje")'>?</i></li>
        <li><b>3000</b>利息金额(元)</li>
        <li><b>100</b>服务费(元)<i class='queryIcon' @click='alertKnow("fwf")'>?</i></li>
      </ul>
    </div>
    <div class="borrowInfoTit" v-if='!isOnce'>
      <dl>
        <dt>项目编号<span class="col3">20151206100122</span></dt>
        <dd>借款期限(月）<span class="col3">3</span></dd>
      </dl>
      <ul>
        <li><b>2900</b>收款金额(元)<i class='queryIcon' @click='alertKnow("skje")'>?</i></li>
        <li><b>3000</b>授信金额(元)<i class='queryIcon' @click='alertKnow("sxje")'>?</i></li>
        <li><b>100</b>期初服务费(元)<i class='queryIcon' @click='alertKnow("qcfwf")'>?</i></li>
      </ul>
    </div>
    <ul class="listCom list-arrow list-mini no-top">
      <li class="mini" @click='goMore'>更多详情</li>
    </ul>
    <dl class="borrowInfoList mt20" v-if='!isOnce'>
      <dt>还款计划</dt>
      <dd class="table">
        <table>
          <tbody>
          <tr>
            <th class="txtLeft" width="18%">期数</th>
            <th>应还本金</th>
            <th>应还利息</th>
            <th width="20%">管理费</th>
          </tr>
          <tr>
            <td class="txtLeft">第一期</td>
            <td>2000.00</td>
            <td>100.81</td>
            <td>21.0</td>
          </tr>
          <tr>
            <td class="txtLeft">第二期</td>
            <td>2000.00</td>
            <td>100.81</td>
            <td>21.0</td>
          </tr>
          <tr>
            <td class="txtLeft">第三期</td>
            <td>2000.00</td>
            <td>100.81</td>
            <td>21.0</td>
          </tr>
          <tr class="end">
            <td class="txtLeft">合计</td>
            <td>6000.00</td>
            <td>602.42</td>
            <td>63.0</td>
          </tr>
          </tbody>
        </table>
      </dd>
    </dl>
    <div class="agreeMent mt20" :class='{ no : !checked }' @click='checked = !checked'>
      我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《借款协议》</span><span class="blue" @click.stop="goAgreem('/agreement')">《委托确认协议书》</span>
      <input type="checkbox" v-model="checked">
    </div>
    <div class="btnWarp">
      <span class="subBtn" :class='{grayBg:!checked}' @click='goSubmit'>确认信息</span>
    </div>
    <alertKnow v-if='knowShow' :title='knowTit' :content='knowCon' @goHide='knowShow = !knowShow'></alertKnow>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isOnce: true,    // 暂代-实际需根据返回的类型
        checked: true,   // 开关-协议是否勾选
        knowShow: false
      }
    },
    methods: {
      goMore() {
        this.$router.push('/loan/sureMore');
      },
      goSubmit() {
        // 暂时跳到首页
        if (this.checked === false) this.$dialog('请阅读并同意协议')
        else {
          this.$dialog(['确认成功', 'true'])
          setTimeout(() => {
            this.$router.push('/')      // 暂时跳到到根
          }, 2000)
        }
      }
    },
    mounted() {
      //页面加载时
      if (Math.random() * 10 >= 5) this.isOnce = false     // 随机显示一次性还款模板或等额模板【数据和user-borrowDetail差不多，就没再做了】
    }
  }
</script>
