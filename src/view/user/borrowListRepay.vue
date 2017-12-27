<template>
  <div class="userBorrow">
    <borrowTitle :idx='2'></borrowTitle>
    <borrowList v-if='hasBorrow' :items='list'></borrowList>
    <pageError v-if='!hasBorrow' :msg='borrowMsg' :class='borrowCls'></pageError>
    <noMore v-if='!hasMore'></noMore>
  </div>
</template>
<script>
  //引入data json
  import data from '../../data/order/list3.json';

  export default {
    data() {
      return {
        hasBorrow: true,     //开关-借款列表
        hasMore: true,       //开关-提示-->没有更多
        borrowMsg: '没有任何借款记录',
        borrowCls: 'error-txt',
        list: []
      }
    },
    mounted() {
      //获取数据
      if (data.totalSize === undefined) {
        this.hasBorrow = false
      } else {
        this.list = data.data
      }
    }
  }
</script>
