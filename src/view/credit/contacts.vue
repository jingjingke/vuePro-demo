<template>
  <div class="container">
    <topComponent title='联系人信息'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>
    <p class="listTop">在您提交借款申请之后，平台需要向您填写的紧急联系人进行电话核实，核实您填写资料的真实性，请知晓。</p>
    <p class="listTop">联系人一</p>
    <ul class="formCom">
      <li>
        <label>
          <span>姓名</span>
          <input type="text" v-model.trim='data.conName1'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>关系</span>
        <p class="gray" :class='{col6 : data.selectBind1 != defBind }'>{{data.selectBind1 | optionTxt(optionBind) }}</p>
        <select v-model='data.selectBind1'>
          <option v-for='option of optionBind' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>手机号码</span>
          <input type="number" v-model.number='data.conPhone1'>
        </label>
      </li>
    </ul>
    <p class="listTop">联系人二</p>
    <ul class="formCom">
      <li>
        <label>
          <span>姓名</span>
          <input type="text" v-model.trim='data.conName2'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>关系</span>
        <p class="gray" :class='{col6 : data.selectBind2 != defBind }'>{{data.selectBind2 | optionTxt(optionBind) }}</p>
        <select v-model='data.selectBind2'>
          <option v-for='option of optionBind' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>手机号码</span>
          <input type="number" v-model.number='data.conPhone2'>
        </label>
      </li>
    </ul>
    <p class="listTop">联系人三</p>
    <ul class="formCom">
      <li>
        <label>
          <span>姓名</span>
          <input type="text" v-model.trim='data.conName3'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>关系</span>
        <p class="gray" :class='{col6 : data.selectBind3 != defBind }'>{{data.selectBind3 | optionTxt(optionBind) }}</p>
        <select v-model='data.selectBind3'>
          <option v-for='option of optionBind' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>手机号码</span>
          <input type="number" v-model.number='data.conPhone3'>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {
          conName1: '',
          selectBind1: '请选择关系',
          conPhone1: '',
          conName2: '',
          selectBind2: '请选择关系',
          conPhone12: '',
          conName3: '',
          selectBind3: '请选择关系',
          conPhone3: ''
        },
        defBind: '请选择关系',
        optionBind: [{
          val: '1',
          txt: '亲人'
        },
          {
            val: '2',
            txt: '朋友'
          },
          {
            val: '3',
            txt: '同事'
          }
        ]
      }
    },
    methods: {
      saveInfo() {
        //检查提交的信息
        let checkName = /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/,
          checkPhone = /^[1][3578][0-9]{9}$/;
        if (checkName.test(this.data.conName1) === false) this.$dialog(["联系人一  姓名格式不正确", 'text']);
        else if (this.data.selectBind1 === this.defBind) this.$dialog(["联系人一  请选择关系", 'text']);
        else if (checkPhone.test(this.data.conPhone1) === false) this.$dialog(["联系人一  手机号格式不正确", 'text']);
        else if (checkName.test(this.data.conName2) === false) this.$dialog(["联系人二  姓名格式不正确", 'text']);
        else if (this.data.selectBind2 === this.defBind) this.$dialog(["联系人二  请选择关系", 'text']);
        else if (checkPhone.test(this.data.conPhone2) === false) this.$dialog(["联系人二  手机号格式不正确", 'text']);
        else if (checkName.test(this.data.conName3) === false) this.$dialog(["联系人三 　姓名格式不正确", 'text']);
        else if (this.data.selectBind3 === this.defBind) this.$dialog(["联系人三 　请选择关系", 'text']);
        else if (checkPhone.test(this.data.conPhone3) === false) this.$dialog(["联系人三 　手机号格式不正确", 'text']);
        else {
          this.$store.commit('uploadCreditStatu', {
            name: 'userContacts',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userContacts',
            val: JSON.stringify(this.data)
          });
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        }
      }
    },
    mounted() {
      // 页面加载时
      if (this.$store.state.creditStatus['userContacts'] === true) {
        if (this.$store.state.creditDatas['userContacts'] !== undefined) {
          this.data = JSON.parse(this.$store.state.creditDatas['userContacts'])
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
    }
  }
</script>
