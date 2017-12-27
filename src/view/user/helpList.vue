<template>
  <div class="container">
    <topComponent title='帮助中心'></topComponent>
    <ul class="listCom list-arrow list-help">
      <li v-for='(item,index) of items' @click="$router.push('/user/helpDetail/'+index)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  //引入页面需要的数据
  import helpDatas from '../../data/helpDatas.json';

  export default {
    data() {
      return {
        items: helpDatas
      }
    }
  }
</script>
