<template>
  <ul class="tabTitle">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "未使用",
            push: "/user/rewardList"
          },
          {
            name: "已使用",
            push: "/user/rewardList/used"
          },
          {
            name: "已失效",
            push: "/user/rewardList/expired"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
