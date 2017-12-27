<template>
  <div class="container">
    <topComponent title='提交申请' class='top-icon' :showLeft='false'>
      <span class="back" @click="goback" slot="left">返回</span>
      <i class="recom" @click="$router.push('/loan/loanRecom')" slot='right'></i>
    </topComponent>
    <ul class="formCom form-selectRight">
      <li class="icon-arrow">
        <span>还款方式</span>
        <p class="gray" :class='{ col6 : data.selectWay!=="请选择" }'>{{data.selectWay | optionTxt(optionWay) }}</p>
        <select v-model='data.selectWay'>
          <option v-for="option of optionWay" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>借款金额</span>
        <p class="gray" :class='{ col6 : data.selectAmount!=="请选择" }'>{{data.selectAmount | optionTxt(optionAmount)}}</p>
        <select v-model='data.selectAmount'>
          <option v-for="option of optionAmount" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>借款期限</span>
        <p class="gray" :class='{ col6 : data.selectLimit!=="请选择" }'>{{data.selectLimit | optionTxt(optionLimit) }}</p>
        <select v-model='data.selectLimit'>
          <option v-for="option of optionLimit" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li @click="goDes">
        <span>借款描述</span>
      </li>
    </ul>
    <ul class="formCom form-selectRight mt30">
      <li class="icon-arrow">
        <span>方便联系时间段</span>
        <p class="gray" :class='{ col6 : data.selectTime!=="请选择" }'>{{data.selectTime | optionTxt(optionTime) }}</p>
        <select v-model='data.selectTime'>
          <option v-for="option of optionTime" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goApply'>提交申请</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        defaultSelect: '请选择',
        data: {
          selectWay: '',       // select-还款方式
          selectAmount: '',    // select-借款金额
          selectLimit: '',     // select-借款期限
          selectTime: ''       // select-时间段
        },
        optionWay: [ // option-还款方式
          {
            val: "1",
            txt: "一次性还本付息"
          },
          {
            val: "2",
            txt: "还本付息"
          }
        ],
        optionAmount: [ // option-借款金额
          {
            val: '500',
            txt: '500元'
          },
          {
            val: '1000',
            txt: '1000元'
          }
        ],
        optionLimit: [ // option-借款期限
          {
            val: '7',
            txt: '7天'
          },
          {
            val: '14',
            txt: '14天'
          },
          {
            val: '21',
            txt: '21天'
          }
        ],
        optionTime: [ // option-时间段
          {
            val: '1',
            txt: '9:00-12:00'
          },
          {
            val: '2',
            txt: '12:00-14:00'
          },
          {
            val: '3',
            txt: '14:00-18:00'
          }
        ]
      }
    },
    methods: {
      goApply() {
        if (this.data.selectWay === this.defaultSelect) this.$dialog('请选择还款方式');
        else if (this.data.selectAmount === this.defaultSelect) this.$dialog('请选择借款金额');
        else if (this.data.selectLimit === this.defaultSelect) this.$dialog('请选择借款期限');
        else if (this.$store.state['tempDesCont'] === '') this.$dialog('请填写描述内容');
        else if (this.data.selectTime === this.defaultSelect) this.$dialog('请选择时间段');
        else this.$router.push('/loan/sureMsg')
      },
      goDes() {
        this.$router.push('/loan/loanDes')
      },
      goback() {
        this.clearStore();
        this.$router.back()
      },
      clearStore() {
        this.$store.commit('uploadApplys', {
          name: 'tempDesCont',
          val: ''
        });
        this.$store.commit('uploadApplys', {
          name: 'tempApplyOpt',
          val: ''
        })
      },
      uploadStore() {
        this.$store.commit('uploadApplys', {
          name: 'tempApplyOpt',
          val: JSON.stringify(this.data)
        })
      }
    },
    created() {
      //为下拉菜单设置默认值
      this.data = {
        selectWay: this.defaultSelect,
        selectAmount: this.defaultSelect,
        selectLimit: this.defaultSelect,
        selectTime: this.defaultSelect
      }
    },
    computed: {
      dataStr: function () {
        let str = '';
        for (let key in this.data) {
          str += this.data[key]
        }
        return str
      }
    },
    watch: {
      'dataStr': 'uploadStore'
    },
    mounted() {
      let tempApplyOpt = this.$store.state['tempApplyOpt'];
      if (tempApplyOpt !== '') this.data = JSON.parse(tempApplyOpt)
    }
  }
</script>
