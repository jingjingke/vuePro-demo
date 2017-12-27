<template>
  <div class="container">
    <topComponent title='疑问解答'></topComponent>
    <div class="concepts">
      <dl>
        <dt>{{helpDetail.title}}</dt>
        <dd v-html='helpDetail.detail'></dd>
      </dl>
    </div>
  </div>
</template>
<script>
  //引入页面需要的数据
  import helpDatas from '../../data/helpDatas.json';

  export default {
    data() {
      return {
        helpDetail: {}
      }
    },
    mounted: function () {
      //页面加载时获取列表索引号-[索引号为传递过来的参数]
      let pIdx = this.$route.params.index;
      //数据提取
      this.helpDetail = helpDatas[pIdx]
    }
  }
</script>
