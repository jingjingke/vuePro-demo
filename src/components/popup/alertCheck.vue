<template>
  <div class="alertCheck">
    <div class="alertCheckCon">
      <p class="title">本次操作需要验证，请输入验证信息。</p>
      <ul class="forms">
        <li>
          <input type="text" placeholder="请输入短信验证码" class="inputType1" v-model.trim='smsCode'>
          <sendSMS @sentAjax='smsAjax' cls='checkCode' timeOut='true'></sendSMS>
        </li>
        <li class="liWarp">
          <canvasCode @codeHasChange='sendCode' placeh='请输入验证码' isTit='false' iCls='inputType2'
                      cCls='checkImg'></canvasCode>
        </li>
      </ul>
      <div class="alertBtns two">
        <span class="btn cancelBtn" @click='goHide'>取消</span>
        <button class="btn bold line" @click='goSubmit'>确定</button>
      </div>
    </div>
    <delayTime v-if='showDelay'></delayTime>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        smsCode: '',
        imgCode: '',
        showDelay: false,
        timeout: true
      }
    },
    props: ['phone'],
    methods: {
      goHide() {
        this.$emit('hide')
      },
      goSubmit() {
        let checkCode = /^[0-9]{6,8}$/;
        if (checkCode.test(this.smsCode) === false) this.$dialog("短信验证码错误");
        else if (this.imgCode.toUpperCase() !== this.canvasCode.codeNums.toUpperCase()) this.$dialog("图片验证码错误");
        else {
          this.showDelay = true;
          setTimeout(() => {
            this.$emit('success')
          }, 2000)
        }
      },
      smsAjax() {
        // 在此发送短信验证码ajax
        console.log('在此发送短信ajax--组件中已$emit该函数')
      },
      sendCode(val) {
        this.imgCode = val;
        console.log(this.imgCode)
      }
    }
  }
</script>
