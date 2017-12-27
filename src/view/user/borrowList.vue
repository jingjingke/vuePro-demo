<template>
  <div class="container">
    <topComponent title='我的借款' :showLeft='false'>
      <span class="back" @click="$router.push('/user')" slot="left">返回</span>
    </topComponent>
    <router-view></router-view>
  </div>
</template>
