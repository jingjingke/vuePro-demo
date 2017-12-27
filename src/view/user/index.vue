<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'></topComponent>
    <dl class="userInfo">
      <dt>
        <p class="user-logo"></p>
        <p class="user-tel">您好<span>{{data.userMobile | filterPhone}}</span></p>
        <p class="user-tag">
          <span class="mLevel">{{data.levelName}}</span>
          <span class="mName">{{data.levelTitle}}</span>
        </p>
      </dt>
      <dd>申请借款<span>{{data.orderApply}}笔</span></dd>
      <dd>待还借款<span>{{data.orderRepay}}笔</span></dd>
    </dl>
    <ul class="listCom list-arrow list-icon mt20">
      <listComponent v-for='item in items' @click="$router.push(item.push)" :class='item.cls' :title='item.tit'></listComponent>
    </ul>
    <p class="signOut mt20" @click='loginOut'>退出登陆</p>
    <footComponent :idx='2'></footComponent>
  </div>
</template>
<script>
  //引入页面数据
  import data from '../../data/user/get_info_new.json';

  export default {
    data() {
      return {
        data: {},
        items: [{
          cls: "icon-jiekuan",
          push: "/user/borrowList",
          tit: "我的借款"
        },
          {
            cls: "icon-huankuan",
            push: "/user/repayList",
            tit: "我的还款"
          },
          {
            cls: "icon-jiangli",
            push: "/user/rewardList",
            tit: "我的奖励"
          },
          {
            cls: "icon-help",
            push: "/user/helpList",
            tit: "帮助中心"
          },
          {
            cls: "icon-yijian",
            push: "/user/feedback",
            tit: "意见反馈"
          },
          {
            cls: "icon-about",
            push: "/user/aboutUs",
            tit: "关于我们"
          }
        ]
      }
    },
    methods: {
      loginOut() {
        this.$router.push('/login')    // 暂时不做处理只去登录页面
      },

    },
    mounted() {
      // 页面加载时拉取数据
      this.data = data.data.userInfo
    }
  }
</script>
