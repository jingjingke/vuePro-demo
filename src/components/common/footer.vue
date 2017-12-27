<template>
  <div class="footer">
    <ul>
      <li v-for='(item,index) of items' :class='[ item.cls , {on:index === idx} ]' @click="$router.push(item.push)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "loan",
          name: "借款",
          push: "/loan"
        },
          {
            cls: "credit",
            name: "信用",
            push: "/credit"
          },
          {
            cls: "user",
            name: "个人中心",
            push: "/user"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
