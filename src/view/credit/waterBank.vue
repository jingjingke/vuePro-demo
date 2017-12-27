<template>
  <div class="container">
    <topComponent title='请选择银行'></topComponent>
    <ul class="listCom list-arrow list-bank no-top">
      <li v-for='(data,index) of datas' :class="data.cls" @click="$router.push('/credit/waterLogin/'+index)">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  //引入银行数据
  import bankDatas from '../../data/waterBank.json'

  export default {
    data() {
      return {
        datas: []
      }
    },
    mounted() {
      this.datas = bankDatas
    }
  }
</script>
