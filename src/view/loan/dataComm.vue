<template>
  <div class="container">
    <topComponent title='完善资料'></topComponent>
    <p class="listTop">必填资料<span class="col9 pl20">以下资料需要完整填写，才能申请借款</span></p>
    <ul class="listCom list-arrow list-icon no-top">
      <listComponent v-for='data in list01' :class='data.cls' @click="$router.push(data.push)" :title='data.tit'>
        <template slot='right'>
          <i class="hasSuc" v-show='data.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
    <p class="listTop">增信资料<span class="col9 pl20">资料越完善，审核通过率越高，借款费用越低</span></p>
    <ul class="listCom list-arrow list-icon no-top">
      <listComponent v-for='data in list02' :class='data.cls' @click="$router.push(data.push)" :title='data.tit'>
        <template slot='right'>
          <i class="hasSuc" v-show='data.isOk'>已完成</i>
        </template>
      </listComponent>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click="goApply">申请借款</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list01: [{
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
          }
        ],
        list02: [{
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
            param: 'userShebao'
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
        // 根据list循环查询缓存中是否存在
        for (let i = 0; i < arr.length; i++) {
          arr[i].isOk = this.$store.state.creditStatus[arr[i].param]
        }
      },
      goApply() {
        if (this.list01[0].isOk === false) this.$dialog('请完善个人信息');
        else if (this.list01[1].isOk === false) this.$dialog('请填写紧急联系人');
        else if (this.list01[2].isOk === false) this.$dialog('请填写工作信息');
        else if (this.list01[3].isOk === false) this.$dialog('请进行身份认证');
        else {
          // 暂代
          this.$router.push('/loan/submitApply')
        }
      }
    },
    mounted() {
      // 查看本地缓存是否已经添加过数据
      this.findLocal(this.list01)
      this.findLocal(this.list02)
    }
  }
</script>
