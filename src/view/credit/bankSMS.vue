<template>
  <div class="container">
    <topComponent title='添加银行卡'></topComponent>
    <p class="listTop">绑卡需要您的短信验证码，短信已发送至您的手机:<br>{{data.phone | telFilter}}</p>
    <ul class="formCom">
      <li>
        <label>
          <span>验证码</span>
          <input type="text" placeholder="请输入验证码" v-model.trim='smsCode'>
        </label>
        <sendSMS cls='code-text' timeOut='true' @sentAjax='smsAjax'></sendSMS>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>确认</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //数据
        data: {},
        smsCode: ''
      }
    },
    methods: {
      goSubmit() {
        //简单判断一下
        let checkCode = /^[0-9]{6,8}$/;
        if (checkCode.test(this.smsCode) === false) this.$dialog("验证码不正确");
        else {
          this.$store.commit('uploadCreditData', {
            name: 'userBank',
            val: true
          })
          this.$dialog("保存成功", "true", 2000);
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        }
      },
      smsAjax() {
        console.log('在此发送短信ajax--组件中已$emit该函数')
      }
    },
    filters: {
      telFilter: function (value) {
        let val = new String(value);
        return val.substring(0, 3) + '****' + val.substring(7, 11)
      }
    },
    mounted() {
      //页面加载时
      this.data = JSON.parse(this.$store.state.creditDatas['userBankTemp'] || '{}');
    }
  }
</script>
