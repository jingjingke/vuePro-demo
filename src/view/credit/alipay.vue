<template>
  <div class="container">
    <topComponent title='支付宝认证'></topComponent>
    <ul class="formCom mt20">
      <li>
        <label>
          <span>支付宝账号</span>
          <input type="text" placeholder="请输入支付宝账号" v-model.trim='name'>
        </label>
      </li>
      <li>
        <label>
          <span>密码</span>
          <input type="password" placeholder="请输入支付宝密码" v-model.trim='pass'>
        </label>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>确认提交</span>
    </div>
    <p class="formTips">温馨提示：我们会严格保护您的隐私，您的账号信息不会被记录</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //数据
        name: '',
        pass: ''
      }
    },
    methods: {
      goSubmit() {
        // 简单判断
        let checkIllegal = /[#\$%\^&\*]/;
        if (this.name.length <= 6 || checkIllegal.test(this.name) === true) this.$dialog("用户名不合法");
        else if (this.pass.length <= 6 || checkIllegal.test(this.pass) === true) this.$dialog("密码不合法");
        else {
          this.$dialog(["需对接支付宝接口", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000);
        }
      }
    }
  }
</script>
