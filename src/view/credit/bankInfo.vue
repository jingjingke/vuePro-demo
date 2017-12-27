<template>
  <div class="container">
    <topComponent title='添加银行卡'>
      <span class="save" @click="$router.push('/credit/bankHelp')" slot='right'>帮助</span>
    </topComponent>
    <template v-if='!hasCard'>
      <p class="listTop bg-blue">
        目前支持16家银行的储蓄卡，<span class="blue txtline" @click="$router.push('/credit/support')">查看支持银行</span>
      </p>
      <p class="listTop">请输入银行卡号添加银行卡的过程中，需要从您的银行卡暂扣3元到我们平台的资金账户, 添加银行卡成功之后，暂扣的3元会在24小时之内归还到您的银行卡中去</p>
      <ul class="formCom">
        <li>
          <label>
            <span>姓名</span>
            <input type="text" readonly='readonly' v-model='name'>
          </label>
        </li>
        <li>
          <label>
            <span>身份证</span>
            <input type="text" readonly='readonly' v-model='id'>
          </label>
        </li>
      </ul>
      <ul class="formCom mt20">
        <li>
          <label>
            <span>收款银行卡</span>
            <input type="text" placeholder="本人银行卡卡号" v-model.trim='data.cardId'>
          </label>
        </li>
        <li>
          <label>
            <span>手机号码</span>
            <input type="number" placeholder="银行卡预留手机号" v-model.number='data.phone'>
          </label>
        </li>
      </ul>
      <p class="listTop">开户行详情</p>
      <ul class="formCom">
        <li class="icon-arrow">
          <span>开户省</span>
          <p class="gray" :class='{col6: regDef.test(data.province)===false }'>{{data.province}}</p>
          <select v-model='data.province'>
            <option>江苏省</option>
          </select>
        </li>
        <li class="icon-arrow">
          <span>开户市</span>
          <p class="gray" :class='{col6: regDef.test(data.city)===false }'>{{data.city}}</p>
          <select v-model='data.city'>
            <option>江苏省</option>
          </select>
        </li>
        <li class="icon-arrow">
          <span>开户行</span>
          <p class="gray" :class='{col6: regDef.test(data.bankSub)===false }'>{{data.bankSub}}</p>
          <select v-model='data.bankSub'>
            <option>江苏省</option>
          </select>
        </li>
      </ul>
      <div class="btnWarp">
        <span class="subBtn" @click='nextStep' :getData='data'>下一步</span>
      </div>
    </template>
    <template v-if='hasCard'>
      <div class="bankList bank60 mt20" @click='goDetail'>
        <b>建设银行</b><span>尾号 2118</span><b class="bank-pay1 blue fr">收款卡</b>
        <p>限额：单笔1.00万元,单日2.00万元,单月3.00万元</p>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        hasCard: false,
        name: '',
        id: '',
        data: {
          cardId: '',
          phone: '',
          province: '请选择省',
          city: '请选择市',
          bankSub: '请选择开户行'
        },
        regDef: /请选择/
      }
    },
    methods: {
      nextStep() {
        // 只简单判断一下
        let checkCard = /^(\d{16}|\d{19})$/,
          checkTel = /^[1][3578][0-9]{9}$/;
        if (checkCard.test(this.data.cardId) === false) this.$dialog("银行卡号格式不对");
        else if (checkTel.test(this.data.phone) === false) this.$dialog("手机号码格式不对");
        else if (this.regDef.test(this.data.province)) this.$dialog("请选择开户省");
        else if (this.regDef.test(this.data.city)) this.$dialog("请选择开户市");
        else if (this.regDef.test(this.data.bankSub)) this.$dialog("请选择开户行");
        else {
          this.$store.commit('uploadCreditStatu', {
            name: 'userBank',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userBankTemp',
            val: JSON.stringify(this.data)
          });
          this.$router.push('/credit/bankSMS')
        }
      },
      goDetail() {
        this.$router.push('/credit/bankDetail')
      }
    },
    mounted() {
      // 刚进入页面就拉取姓名和身份号
      this.name = "测试数据";
      this.id = '320721199010022431';
      // 模拟已经绑卡成功
      if (this.$store.state.creditStatus['userBank'] === true) this.hasCard = true
    }
  }
</script>
