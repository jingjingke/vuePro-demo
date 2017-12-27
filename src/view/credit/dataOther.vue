<template>
  <div class="container">
    <topComponent title='其它资料'></topComponent>
    <p class="listTop">资料越完善，借款成功的概率越高，信用状况越好，需要支付的借款费用越少。</p>
    <ul class="listCom list-arrow no-top">
      <listComponent v-for='data in datas' @click="$router.push('/credit/uploadPic/' + data.param)" :title='data.title'>
        <template slot='right'>
          <i class="hasSuc" :class='{ noSuc : data.value === "未提供" }'>{{data.value}}</i>
        </template>
      </listComponent>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        datas: [{
          title: '财力证明',
          value: '未提供',
          param: 'otherFile'
        },
          {
            title: '工资流水',
            value: '未提供',
            param: 'salaryFile'
          },
          {
            title: '个人征信报告',
            value: '未提供',
            param: 'personCreditFile'
          },
          {
            title: '社保',
            value: '未提供',
            param: 'socialSecurityFile'
          },
          {
            title: '信用卡账单',
            value: '未提供',
            param: 'creditCardFile'
          },
          {
            title: '工作证明',
            value: '未提供',
            param: 'workFile'
          },
          {
            title: '结婚证明',
            value: '未提供',
            param: 'marriageFile'
          },
          {
            title: '营业执照',
            value: '未提供',
            param: 'businessLicenseFile'
          },
          {
            title: '其它所有贷款协议/凭证',
            value: '未提供',
            param: 'loanAgreementFile'
          },
        ]
      }
    },
    mounted() {
      // 页面加载时
      for (let i = 0; i < this.datas.length; i++) {
        if (this.$store.state.ohterPicStatus[this.datas[i].param] === true) {
          this.datas[i].value = "已提供"
        }
      }
    },
    beforeDestroy() {
      // 如果都是已提供资料的话则“其它资料”记录标识
      if (/未提供/.test(JSON.stringify(this.datas)) === false) {
        this.$store.commit('uploadCreditStatu', {
          name: 'userOhter',
          val: true
        })
      } else {
        this.$store.commit('uploadCreditStatu', {
          name: 'userOhter',
          val: false
        })
      }
    }
  }
</script>
