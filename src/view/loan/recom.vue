<template>
  <div class="container">
    <topComponent title='推荐人手机号码'></topComponent>
    <ul class="formCom form-untitled">
      <li>
        <input type="number" placeholder="请输入推荐人手机号码" v-model.number='phone'/>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click="goSave">完成</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: ''
      }
    },
    methods: {
      goSave() {
        let checkName = /^[1][3578][0-9]{9}$/;
        //先简单判断一下手机号格式，后期再加上一些ajax匹配库中是否有该手机号
        if (checkName.test(this.phone) === false) {
          this.$dialog('手机号格式不正确', 'sort')
        } else {
          //暂时跳到一页
          this.$dialog(['提交成功', 'true']);
          setTimeout(() => {
            this.$router.back()
          }, 2000);
        }
      }
    }
  }
</script>
