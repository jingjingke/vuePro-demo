<template>
  <div class="container">
    <topComponent title='查看合同'></topComponent>
    <table class="tableUl col6" cellpadding="0" cellspacing="0">
      <tr>
        <th>合同编号</th>
        <th>投资人</th>
        <th>投资金额</th>
        <th>操作</th>
      </tr>
      <tr @click='goDetail'>
        <td>20160525</td>
        <td>183****3635</td>
        <td>1000000.00</td>
        <td class="txtline blue">查看</td>
      </tr>
      <tr @click='goDetail'>
        <td>20160525</td>
        <td>183****3635</td>
        <td>1000000.00</td>
        <td class="txtline blue">查看</td>
      </tr>
      <tr @click='goDetail'>
        <td>20160525</td>
        <td>183****3635</td>
        <td>1000000.00</td>
        <td class="txtline blue">查看</td>
      </tr>
      <tr @click='goDetail'>
        <td>20160525</td>
        <td>183****3635</td>
        <td>1000000.00</td>
        <td class="txtline blue">查看</td>
      </tr>
    </table>
    <p class="signOut mt20 col9 fz26 noB" @click='goDetail'>查看合同</p>
  </div>
</template>
<script>
  export default {
    methods: {
      goDetail() {
        this.$router.push('/user/dealDetail')
      }
    }
  }
</script>
