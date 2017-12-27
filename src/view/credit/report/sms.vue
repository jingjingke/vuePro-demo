<template>
  <div class="container">
    <topComponent title='快捷验证'></topComponent>
    <p class="listTop">您的手机号码：137****7081</span>
    </p>
    <ul class="formCom form-reportSMS">
      <li>
        <label>
          <input type="text" placeholder="请输入短信验证码" v-model.trim='code'>
        </label>
        <sendSMS btn='发送验证码' @sentAjax='smsAjax'></sendSMS>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>提交</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        code: ''
      }
    },
    methods: {
      goSubmit() {
        console.log('待开发')
      },
      smsAjax() {
        console.log('在此发送短信ajax--组件中已$emit该函数')
      }
    }
  }
</script>
