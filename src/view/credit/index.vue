<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'></topComponent>
    <ul class="listCom list-arrow list-icon no-top">
      <listComponent v-for='data in datas' :class='data.cls' @click="$router.push(data.push)" :title='data.tit'>
        <template slot='right'>
          <i class="hasSuc" v-show='data.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
    <footComponent :idx='1'></footComponent>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //已完成的开关
        datas: [{
          cls: 'icon-info',
          tit: '个人信息',
          push: '/credit/userInfo',
          isOk: false,
          param: 'userInfo'
        },
          {
            cls: 'icon-urgent',
            tit: '紧急联系人',
            push: '/credit/contacts',
            isOk: false,
            param: 'userContacts'
          },
          {
            cls: 'icon-scan',
            tit: '人脸识别',
            push: '/credit/scan',
            isOk: false,
            param: 'userScan'
          },
          {
            cls: 'icon-phone',
            tit: '手机认证',
            push: '/credit/mobile',
            isOk: false,
            param: 'userPhone'
          },
          {
            cls: 'icon-work',
            tit: '工作信息',
            push: '/credit/work',
            isOk: false,
            param: 'userWork'
          },
          {
            cls: 'icon-idPic',
            tit: '身份证认证',
            push: '/credit/idCard',
            isOk: false,
            param: 'userIdpic'
          },
          {
            cls: 'icon-fund',
            tit: '公积金授权',
            push: '/credit/gjjCity',
            isOk: false,
            param: 'userFund'
          },
          {
            cls: 'icon-shebao',
            tit: '社保授权',
            push: '/credit/sbsqCity',
            isOk: false,
            param: 'userSB'
          },
          {
            cls: 'icon-chuxu',
            tit: '储蓄卡流水导入',
            push: '/credit/waterBank',
            isOk: false,
            param: 'userChuxu'
          },
          {
            cls: 'icon-zhima',
            tit: '芝麻信用授权',
            push: '/credit/zhima',
            isOk: false,
            param: 'userZhima'
          },
          {
            cls: 'icon-bank',
            tit: '银行卡信息',
            push: '/credit/bankInfo',
            isOk: false,
            param: 'userBank'
          },
          {
            cls: 'icon-credit',
            tit: '查询央行征信',
            push: '/creditReport',
            isOk: false,
            param: 'userCredit'
          },
          {
            cls: 'icon-alipay',
            tit: '支付宝认证',
            push: '/credit/alipay',
            isOk: false,
            param: 'userAlipay'
          },
          {
            cls: 'icon-other',
            tit: '其他资料',
            push: '/credit/otherData',
            isOk: false,
            param: 'userOhter'
          }
        ]
      }
    },
    mounted() {
      // 循环获取vuex保存的信用中心状态值
      for (let i = 0; i < this.datas.length; i++) {
        this.datas[i].isOk = this.$store.state.creditStatus[this.datas[i].param]
      }
    }
  }
</script>
