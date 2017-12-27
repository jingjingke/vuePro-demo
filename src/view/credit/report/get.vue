<template>
  <div class="container">
    <topComponent title='获取报告'></topComponent>
    <p class="listTop">您的个人信用报告已经生成，请输入身份验证码查询。身份验证码自生成之日起<span class="blue">7天后失效</span></p>
    <ul class="formCom">
      <li>
        <label>
          <span>身份验证码</span>
          <input type="text" placeholder="6位数字与英文组合" v-model.trim='code'>
        </label>
      </li>
    </ul>
    <p class="formTips">如您未重新申请报告且后续查看，则验证码可随意输入</p>
    <div class="btnWarp">
      <span class="subBtn" :class='{grayBg:power}' @click='goSubmit'>获取报告</span>
    </div>
    <p class="formMore">未收到验证码？</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //数据
        code: '',
        power: true
      }
    },
    methods: {
      goSubmit() {
        if (this.power === true) console.log('暂时还未开发');
      },
      checkCode() {
        var check = /^[0-9a-zA-Z]{6}$/;
        if (check.test(this.code) === true) this.power = false;
        else this.power = true;
      }
    },
    watch: {
      "code": "checkCode"
    }
  }
</script>
