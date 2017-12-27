<template>
  <div class="container">
    <topComponent title='选填资料'></topComponent>
    <div class="listTop">
      <p class="tCenter col9">填写更多资料，审核通过率更高，借款费率更低</p>
    </div>
    <ul class="listCom list-arrow list-icon list-plus no-top">
      <listComponent v-for='data in list' :class='[allCls , data.cls]' @click="$router.push(data.push)" :title='data.tit'>
        <template slot='right'>
          <i class="hasSuc" v-show='data.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        allCls: 'plus-two',
        list: [{
          cls: 'icon-info',
          tit: '完善信息',
          push: '/credit/userInfo',
          isOk: false,
          param: 'userInfo'
        },
          {
            cls: 'icon-credit',
            tit: '查询央行征信',
            push: '/creditReport',
            isOk: false,
            param: 'userCredit'
          },
          {
            cls: 'icon-bank',
            tit: '银行卡信息',
            push: '/credit/bankInfo',
            isOk: false,
            param: 'userBank'
          },
          {
            cls: 'icon-alipay',
            tit: '支付宝认证',
            push: '/credit/alipay',
            isOk: false,
            param: 'userIdpic'
          },
          {
            cls: 'icon-fund',
            tit: '<span class="tit">储蓄卡流水导入</span><em class="bot">推荐导入工资卡，需要开通网银</em>',
            push: '/credit/gjjCity',
            isOk: false,
            param: 'userFund'
          },
          {
            cls: 'icon-chuxu',
            tit: '储蓄卡流水导入',
            push: '/credit/waterBank',
            isOk: false,
            param: 'userChuxu'
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
    methods: {
      findLocal(arr) {
        //根据list循环查询缓存中是否存在
        for (var i = 0; i < arr.length; i++) {
          arr[i].isOk = this.$store.state.creditStatus[arr[i].param]
        }
      }
    },
    mounted() {
      //查看本地缓存是否已经添加过数据
      this.findLocal(this.list)
    }
  }
</script>
