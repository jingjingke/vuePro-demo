<template>
  <div class="container">
    <topComponent title='取消上标'></topComponent>
    <div class="feedBack">
      <p class="listTop"><span class="col3">是否确认取消本次借款申请？取消之后借款本金不会发放，也不会产生任何费用</span></p>
      <div class="feed-text" :class='{col5 : textArea!==defaultVal}'>
        <textarea maxlength="200" class="limitFeed" @focus='textFocus()' @blur='textBlur()' v-model.tirm='textArea'></textarea>
        <p class="feed-num">还可以输入<span class="limitNum">{{textNum}}</span>个字</p>
      </div>
    </div>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>确定</span>
    </div>
    <alertTip v-if='alertShow' @btnClick1="$router.back()" name='qxsb'></alertTip>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        defaultVal: '请填写您取消上标的理由。如果本次取消订单是因为我们产品做得不好，您的建议能帮助我们进一步优化服务。',
        textArea: '',
        textNum: 200,     // 字数限制
        alertShow: false
      }
    },
    methods: {
      goSubmit() {
        //点击提交时进行两层判断
        if (this.textArea === this.defaultVal || this.textArea.length < 5) {
          this.$dialog('字数不能小于5')
        } else {
          this.alertShow = true
        }
      }
    },
    watch: {
      "textArea": "changeText"
    },
    mounted() {
      this.textArea = this.defaultVal
    }
  }
</script>
