<template>
  <div class="container bgF">
    <topComponent title='芝麻信用分'></topComponent>
    <div class="zhimaCanvas" v-if='isOk'>
      <canvas id="zmCanvas" width="450px" height="450px"></canvas>
    </div>
    <pageError v-if='!isOk' msg='系统开小差了，没有找到您要的数据。' class='error-zhima'></pageError>
    <div class="btnWarp">
      <span class="subBtn">查看最新芝麻分</span>
    </div>
  </div>
</template>
<script>
  import zhima from '../../assets/lib/zhima'

  export default {
    data() {
      return {
        isOk: true,   // 芝麻数据获取是否正常
        num: 0,       // 芝麻分数
        time: ''
      }
    },
    methods: {
      Range1(Min, Max) {
        let Range = Max - Min;
        let Rand = Math.random();
        let rangNum = Min + Math.round(Rand * Range);   // 四舍五入
        return rangNum
      }
    },
    mounted() {
      // 页面加载根据数据绘制芝麻分
      if (Math.random() > 0.5) this.isOk = false;      // 随机显示分数或报错
      // 模拟数据
      this.num = this.Range1(350, 950);                // 分数取350-950之间随机数
      this.time = '2017-1-11 01:11:11';

      if (this.isOk === true) zhima.canvas('zmCanvas', this.num, this.time);
    }
  }
</script>
