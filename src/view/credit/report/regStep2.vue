<template>
  <div class="container">
    <topComponent title='注册征信查询账号'></topComponent>
    <div class="reportStepTit">
      <ul>
        <li class="step01 ok"><i>1</i>填写信息</li>
        <li class="step02 ok"><i>2</i>补充信息</li>
        <li class="step03"><i>3</i>完成注册</li>
      </ul>
    </div>
    <ul class="formCom form-reportReg mt20">
      <li>
        <label><span>登录名</span><input type="text" placeholder="请输入登录名" v-model.trim='name'></label>
      </li>
      <li>
        <label><span>密码</span><input type="password" placeholder="6~12位且必须同时包含数字和字母" v-model.trim='pass1'></label>
      </li>
      <li>
        <label><span>确认密码</span><input type="password" placeholder="请再次输入密码" v-model.trim='pass2'></label>
      </li>
      <li>
        <label><span>手机号</span><input type="text" placeholder="请输入手机号" v-model.trim='phone'></label>
      </li>
      <li>
        <label><span>短信验证码</span><input type="text" placeholder="由6位字母及数字组成" v-model.trim='code'></label>
        <sendSMS btn='发送验证码' @sentAjax='smsAjax'></sendSMS>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goNext'>下一步</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //数据
        name: '',
        pass1: '',
        pass2: '',
        phone: '',
        code: ''
      }
    },
    methods: {
      goNext() {
        console.log('待开发')
      },
      smsAjax() {
        console.log('在此发送短信ajax--组件中已$emit该函数')
      }
    }
  }
</script>
