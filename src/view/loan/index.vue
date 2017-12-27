<template>
  <div class="container">
    <topComponent :title='appName' :showLeft='false'></topComponent>
    <loanBanner></loanBanner>
    <ul class="indexList mt20">
      <li v-for='data in list' :class='data.cls' @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
    </ul>
    <footComponent :idx='0'></footComponent>
  </div>
</template>
<script>
  // 引入banner组件
  import loanBanner from '../../components/loan/banner'

  export default {
    data() {
      return {
        list: [{
          cls: '',
          tit: '微额借款',
          con: '金额500、1000元，期限7天、14天、21天',
          push: '/loan/micro'
        },
          {
            cls: 'icon02',
            tit: '小额借款',
            con: '最高金额5000元，最长期限6个月',
            push: '/loan/samll'
          },
          {
            cls: 'icon03',
            tit: '草根福利借款',
            con: '最高金额10000元，期限30天',
            push: '/loan/large'
          }
        ]
      }
    },
    components: {
      loanBanner
    }
  }
</script>
