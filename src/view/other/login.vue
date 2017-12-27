<template>
  <div class="container bgF">
    <topComponent title='登录' :showLeft='false'>
      <span class="back" @click='goCancel' slot="left">取消</span>
    </topComponent>
    <h2 class="logoIcon">{{appName}}</h2>
    <ul class="formCom form-login form-mini">
      <li class="icon-clear">
        <label>
          <span>账号</span>
          <input type="number" placeholder="请输入手机号" v-model.number='name'>
          <i @click='name = ""'></i>
        </label>
      </li>
      <li :class='[{"icon-eye1":showPwd},{"icon-eye2":!showPwd}]'>
        <label>
          <span>密码</span>
          <input :type="showPwd?'password':'text'" placeholder="请输入6-12位密码" v-model.trim='pwd'>
          <i @click='showPwd = !showPwd'></i>
        </label>
      </li>
      <li>
        <canvasCode @codeHasChange='sendCode'></canvasCode>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='logIn'>登录</span>
    </div>
    <div class="forgetWarp">
      <span class="col6" @click="$router.push('/reg')">马上注册</span>
      <span class="fr col6" @click="$router.push('/forget')">忘记密码？</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        code: '',
        showPwd: true,  //开关--密码可见
        canvas: {}      //存放canvas DOM节点
      }
    },
    methods: {
      logIn() {
        //先做一些简单的判断再提交ajax
        if (/^[1][3578][0-9]{9}$/.test(this.name) === false) this.$dialog('帐号不正确');
        else if (/^[\d\D]{6,12}$/.test(this.pwd) === false) this.$dialog('密码不正确');
        else if (this.code.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog('验证码不正确');
        else {
          //先跳到借款首页暂代，后期ajax替换
          this.$router.push('/loan')
        }
      },
      goCancel() {
        //根据情景不一样，跳转的页面也会不同，暂定跳到我的借款首页
        //...省略
        this.$router.push('/loan')
      },
      sendCode(val) {
        this.code = val
      }
    }
  }
</script>
