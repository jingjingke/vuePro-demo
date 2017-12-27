<template>
  <div class="container">
    <topComponent title='央行征信登录'></topComponent>
    <ul class="formCom form-report mt20">
      <li class="user">
        <label>
          <input type="text" placeholder="请输入登录名" v-model.trim='name'>
        </label>
      </li>
      <li class="pass">
        <label>
          <input type="password" placeholder="请输入密码" v-model.trim='pass'>
        </label>
      </li>
      <li class="safe">
        <canvasCode @codeHasChange='sendCode' placeh='请输入验证码' isTit='false'></canvasCode>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>确定提交</span>
    </div>
    <div class="btnWarp">
      <span class="subBtn blueLight" @click="$router.push('regStep1')">注册征信查询账号</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        pass: '',
        code: ''
      }
    },
    methods: {
      goSubmit() {
        console.log('待开发')
      },
      sendCode(val) {
        this.code = val;
        console.log(this.code)
      }
    }
  }
</script>
