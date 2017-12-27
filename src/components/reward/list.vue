<template>
  <ul class="rewardList">
    <li v-for='data in items'>
      <p class="price"><b>{{data.faceValue}}</b>元</p>
      <p class="info"><span>{{data.description}}</span>有效期至{{data.loseTime}}<br>所有奖励券之间均不能叠加使用</p>
    </li>
  </ul>
</template>
<script>
  export default {
    props: ['items']
  }
</script>
