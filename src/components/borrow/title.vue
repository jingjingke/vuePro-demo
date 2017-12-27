<template>
  <ul class="tabTitle">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          name: "全部",
          push: "/user/borrowList"
        },
          {
            name: "申请中",
            push: "/user/borrowList/apply"
          },
          {
            name: "待归还",
            push: "/user/borrowList/repay"
          },
          {
            name: "已结束",
            push: "/user/borrowList/over"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
