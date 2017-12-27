<template>
  <div class="container bgF">
    <topComponent title='身份验证'></topComponent>
    <div class="reportAnswers">
      <p class="timeTip">请在<span>{{showTime}}</span>内提交答案</p>
      <ul class="ansList" id="ansList">
        <li>
          <p><span>Q1</span>2013年01月至2016年05月期间，您的所有贷款中，最近办理的一笔贷款额度为多少？{{answer01}}</p>
          <label v-for='option in options' :class="{checked:answer01===option}">
            <span>{{option}}</span>
            <input type="radio" :value="option" v-model='answer01'>
          </label>
        </li>
        <li>
          <p><span>Q2</span>2013年01月至2016年05月期间，您的所有贷款中，最近办理的一笔贷款额度为多少？{{answer02}}</p>
          <label v-for='option in options' :class="{checked:answer02===option}">
            <span>{{option}}</span>
            <input type="radio" :value="option" v-model='answer02'>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 数据
        answer01: '',
        options: ['1-10000', '10001-20000', '20001-30000', '30001-40000', '以上都不是'],
        answer02: '',
        downTime: 600,
        showTime: '',
        timecount: {}
      }
    },
    mounted() {
      //初始化默认值
      this.answer01 = this.options[0];
      this.answer02 = this.options[0];
      //开始倒计时时间
      this.showTime = '10分0秒';
      this.timecount = setInterval(() => {
        this.downTime--;
        if (this.downTime === 0) {
          clearInterval(this.timecount)
          //倒计时结束时进行其它操作
          //...省略
        }
        let m = parseInt(this.downTime / 60),
          s = this.downTime % 60;
        this.showTime = m + '分' + s + '秒';
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timecount);
    }
  }
</script>
