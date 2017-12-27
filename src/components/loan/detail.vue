<template>
  <div class="loanDetail">
    <dl>
      <dt>产品要点</dt>
      <dd>
        <template v-for='item in data.product'>
          <p>{{item.tit}}<span class="fr">{{item.con}}</span></p>
        </template>
      </dd>
    </dl>
    <dl>
      <dt>需要资料</dt>
      <dd>
        <p v-html='data.data'></p>
      </dd>
    </dl>
    <dl class="hasIcon" :class='{ down : showFeatrue}'>
      <dt @click="showFeatrue = !showFeatrue">产品特点</dt>
      <dd v-show='showFeatrue'>
        <p v-html='data.feature'></p>
      </dd>
    </dl>
    <dl class="hasIcon" :class='{ hot : hasHot , down : showTips }'>
      <dt @click="toggleTips">好借好还，再借不难</dt>
      <dd v-show='showTips'>
        <p v-html='data.tips'></p>
      </dd>
    </dl>
    <div class="btnWarp btn-float">
      <slot name="apply"></slot>
    </div>
  </div>
</template>
<script>
  // 引入data
  import detailData from "../../data/loan_detail.json"

  export default {
    data() {
      return {
        data: {},
        showFeatrue: false,
        showTips: false,
        hasHot: true
      }
    },
    methods: {
      toggleTips() {
        this.showTips = !this.showTips;
        if (this.hasHot == true) {
          this.hasHot = !this.hasHot;
          this.$store.commit('changeLoanIconStatu', {
            name: this.uid,
            val: true
          })
        }
      }
    },
    props: ['uid'],
    mounted() {
      // 根据传入的uid来，拉取该页面数据
      this.data = detailData[this.uid];
      // 打开页面时需要判断是否点过这个页面，显示下面的红色小圆点
      let thisIcon = this.$store.state.loanIcons[this.uid];
      if (thisIcon) this.hasHot = false;
    }
  }
</script>
