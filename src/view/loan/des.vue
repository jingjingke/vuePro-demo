<template>
  <div class="container">
    <topComponent title='借款描述'>
      <span class="save" slot="right" @click='goSave'>保存</span>
    </topComponent>
    <template v-for='(data,index) of datas'>
      <p class="listTop"><span class="col3">{{data.tit}}</span>
        <template v-if='data.num !== 100'>(还可输入{{data.num}}字)</template>
      </p>
      <div class="feedBack">
        <div class="feed-text feed-mini" :class='{ col5 : data.def!==data.txt }'>
          <textarea maxlength="100" class="limitFeed" @focus='textFocus(index)' @blur='textBlur(index)' v-model.tirm='data.txt'></textarea>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        datas: [
          {
            tit: '我的简介',
            txt: '',
            num: 100,
            def: '请简单介绍您的基本情况。例如：本人在浙江杭州上班，从事的行业是互联网行业。（字数100字以内）'
          },
          {
            tit: '我的还款能力',
            txt: '',
            num: 100,
            def: '请简单介绍您的还款能力。例如：本人在公司任职的岗位是java开发，月收入稳定，能按时归还借款。（字数100字以内）'
          },
          {
            tit: '本次申请借款的用途',
            txt: '',
            num: 100,
            def: '请介绍本次申请借款的用途。例如：本次申请借款主要是因为新家装修，急需用钱。（字数100字以内）'
          },
        ]
      }
    },
    methods: {
      textFocus(i) {
        //获取焦点时
        if (this.datas[i].txt === this.datas[i].def) this.datas[i].txt = '';
      },
      textBlur(i) {
        //失去焦点时
        if (this.datas[i].txt === '') this.datas[i].txt = this.datas[i].def;
        ;
      },
      changeText(i) {
        //如果当前textarea值不等于默认值的话-->限止字母在100字内
        if (this.datas[i].txt.length > 100) {
          this.datas[i].txt = this.datas[i].txt.substring(0, 100);
        } else if (this.datas[i].txt === this.datas[i].def) {
          this.datas[i].num = 100;
        } else {
          this.datas[i].num = (100 - this.datas[i].txt.length);
        }
      },
      goSave() {
        if (this.datas[0].num > 95) this.$dialog('简介不能小于5个字');
        else if (this.datas[1].num > 95) this.$dialog('能力不能小于5个字');
        else if (this.datas[2].num > 95) this.$dialog('用途不能小于5个字');
        else {
          this.$store.commit('uploadApplys', {
            name: 'tempDesCont',
            val: JSON.stringify(this.datas)
          });
          this.$dialog(['保存成功', 'true']);
          // 正常是ajax提交内容--...此处省略
          setTimeout(() => {
            this.$router.back();
          }, 1800)
        }
      }
    },
    computed: {
      dataRest: function () {
        // 计算返回一组新数据格式-->{'0':'xxx','1':'xxx','2':'xxx'}<--[模拟索引号]]
        let obj = {};
        for (let i = 0; i < this.datas.length; i++) obj[i] = this.datas[i].txt;
        return obj;
      }
    },
    watch: {
      dataRest: {
        handler: function (nowVal, oldVal) {
          // 观擦计算返回的新数据-->对比新旧值返回差异的[“索引号”]
          for (let i = 0; i < this.datas.length; i++) {
            if (nowVal[i] !== oldVal[i]) this.changeText(i);
          }
        },
        deep: true
      }
    },
    created: function () {
      for (let i = 0; i < this.datas.length; i++) this.datas[i].txt = this.datas[i].def;    // 为textarea赋默认值
    },
    mounted: function () {
      // 打开页面的时候查看缓存中是否有值[细处的逻辑待填加]
      let tempDesCont = this.$store.state['tempDesCont'];
      if (tempDesCont !== '') {
        this.datas = JSON.parse(tempDesCont)
      }
    }
  }
</script>
