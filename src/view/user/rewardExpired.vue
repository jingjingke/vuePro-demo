<template>
  <div class="rewardWarp">
    <rewardTitle :idx='2'></rewardTitle>
    <rewardList v-if='hasReward' :items="list" class='reward-out'></rewardList>
    <pageError v-if='!hasReward' msg='暂无抵用券~' class='error-reward'></pageError>
  </div>
</template>
<script>
  //引入页面数据
  import vouchers from '../../data/user/voucher3.json';

  export default {
    data() {
      return {
        hasReward: true,
        list: []
      }
    },
    mounted() {
      //页面加载时 拉取数据
      if (vouchers.data.length === 0) this.hasReward = false;
      else this.list = vouchers.data;
    }
  }
</script>
