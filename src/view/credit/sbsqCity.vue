<template>
  <div class="container bgF">
    <topComponent title='选择城市'></topComponent>
    <div class="selectCity">
      <dl v-for='(data,index) of datas' id="data.letter" :class='{ floatLetter : classPower === index}'>
        <dt><a :name="data.letter" :ref='data.letter'>{{data.letter}}</a></dt>
        <dd v-for='city in data.citys'>{{city}}</dd>
      </dl>
      <p ref="floatLeft">
        <a v-for='(data,index) of datas' @click='goPosition(index)'>{{data.letter}}</a>
      </p>
    </div>
  </div>
</template>
<script>
  // 引入所有城市数据
  import cityData from '../../data/cityData.json'
  import charfirst from '../../assets/lib/charfirst'

  export default {
    data() {
      return {
        //数据
        datas: [],
        offsets: {},
        classPower: 0,
        offLength: 0
      }
    },
    methods: {
      handleScroll() {
        let scrollY = window.scrollY + this.offsets['0'];
        // 判断三种情况（1）不足第一个高度（2）大于最后一个高度（3）中间高度
        if (scrollY < this.offsets['0']) {
          this.classPower = 0
        } else if (scrollY >= this.offsets[this.offLength - 1]) {
          this.classPower = this.offLength - 1
        } else {
          //中间高度需要进行循环
          for (let i = 0; i < this.offLength; i++) {
            if (scrollY >= this.offsets[i] && scrollY < this.offsets[i + 1]) {
              this.classPower = i;
              break
            }
          }
        }
      },
      goPosition(index) {
        let start = window.scrollY,
          end = this.offsets[index];
        let px = end - start,
          time = 200,
          b = 0,
          m = 10;
        let step = px / time * m;
        let that = this;
        let gopo = setInterval(function () {
          b += m;
          if (b === time) {
            clearInterval(gopo);
            window.scrollTo(0, that.offsets[index]);
          } else {
            start = start + step;
            window.scrollTo(0, start)
          }

        }, m)
      }
    },
    mounted() {
      //页面加载时
      this.datas = charfirst.cityName(cityData);
      //数据渲染完之后的回调
      this.$nextTick(function () {
        //将右侧浮动高度调整成垂直居中
        let parHeight = this.$refs.floatLeft.offsetHeight;
        this.$refs.floatLeft.style.marginTop = '-' + parHeight / 2 + 'px';
        //记录首字母拼音的位置 //this.offsets最终格式{1:'88',2:'204'...}
        for (let i = 0; i < this.datas.length; i++) {
          this.offsets[i] = this.$refs[this.datas[i].letter][0].offsetTop;
          this.offLength++
        }
        window.addEventListener('scroll', this.handleScroll)
      })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
