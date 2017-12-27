<template>
  <div class="container bgF">
    <topComponent title='注册' back='登录'></topComponent>
    <h2 class="logoIcon">{{appName}}</h2>
    <ul class="formCom form-login">
      <li>
        <label>
          <span>手机号</span>
          <input type="number" placeholder="请输入手机号" v-model.number='phone'/>
        </label>
      </li>
      <li>
        <canvasCode @codeHasChange='sendCode' name='图片验证码'></canvasCode>
      </li>
      <li>
        <label>
          <span>短信验证码</span>
          <input type="number" placeholder="请输入短信验证码" v-model.number='smsCode'>
        </label>
        <sendSMS @sentAjax='smsAjax'></sendSMS>
      </li>
      <li :class="showPwdOne?'icon-eye1':'icon-eye2'">
        <label>
          <span>登录密码</span>
          <input :type="showPwdOne?'password':'text'" placeholder="请输入6-12位密码" v-model.trim='pwdOne'>
          <i @click='showPwdOne = !showPwdOne'></i>
        </label>
      </li>
      <li :class="showPwdTwo?'icon-eye1':'icon-eye2'">
        <label>
          <span>确认密码</span>
          <input :type="showPwdTwo?'password':'text'" placeholder="请输入6-12位确认密码" v-model.trim='pwdTwo'>
          <i @click='showPwdTwo = !showPwdTwo'></i>
        </label>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" :class='{grayBg:!checked}' @click='goReg'>立即注册</span>
    </div>
    <div class="agreeMent mt20" :class='{ no : !checked }' @click='checked = !checked'>
      我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《草根信贷用户协议》</span>
      <input type="checkbox" v-model="checked">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: '',
        imgCode: '',
        smsCode: '',
        pwdOne: '',
        pwdTwo: '',
        checked: true,      //是否同意协议
        showPwdOne: true,   //开关--明文显示第一个密码
        showPwdTwo: true,   //开关--明文显示第二个密码
        canvas: {}          //存放canvas DOM节点
      }
    },
    methods: {
      goReg() {
        let checkPhone = /^[1][3578][0-9]{9}$/,
          checkPwdOne = /^[\d\D]{6,12}$/,
          checkSMS = /^[0-9]{4,8}$/;
        //先做一些简单的判断再提交ajax
        if (this.checked === false) this.$dialog('请阅读并同意协议');
        else if (checkPhone.test(this.phone) === false) this.$dialog('手机格式不正确');
        else if (this.imgCode.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog('图片验证码不正确');
        else if (checkSMS.test(this.smsCode) === false) this.$dialog('短信验证码不正确');
        else if (checkPwdOne.test(this.pwdOne) === false) this.$dialog('密码格式不正确');
        else if (this.pwdTwo !== this.pwdOne) this.$dialog('确认密码不正确');
        else {
          //先由跳到登录页暂代，后期ajax
          this.$router.push('/login')
        }
      },
      smsAjax() {
        console.log('在此发送短信ajax--组件中已$emit该函数')
      },
      sendCode(val) {
        this.imgCode = val
      }
    }
  }
</script>
