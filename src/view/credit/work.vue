<template>
  <div class="container">
    <topComponent title='工作信息'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>
    <p class="listTop">真实有效的信息会提高我们风控审核通过的概率，请如实填写您的工作单位信息及工作内容。</p>
    <ul class="formCom form-plus">
      <li>
        <label>
          <span>公司名称</span>
          <input type="text" v-model.trim='data.comName'>
        </label>
      </li>
      <li>
        <label>
          <span>公司固定电话</span>
          <input type="text" v-model='data.tel'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>公司性质</span>
        <p class="gray" :class='{col6: data.type !== defVal }'>{{data.type}}</p>
        <select v-model='data.type'>
          <option v-for='option of optionType'>{{option}}</option>
        </select>
      </li>
      <li class="icon-calendar">
        <label>
          <span>入职时间</span>
          <input type="date" v-model='data.inTime'>
        </label>
      </li>
      <li>
        <label>
          <span>月均收入(元)</span>
          <input type="number" placeholder="填写数字如：3000" v-model.number='data.salary'>
        </label>
      </li>
    </ul>
    <p class="listTop">公司地址</p>
    <ul class="formCom form-plus">
      <li class="icon-arrow">
        <span>选择省</span>
        <p class="gray" :class='{col6: data.selectProy !== defVal }'>{{data.selectProy | optionArrobj(optionProy) }}</p>
        <select v-model='data.selectProy'>
          <option v-for="option in optionProy" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>选择市</span>
        <p class="gray" :class='{col6: data.selectCity !== defVal }'>{{data.selectCity | optionArrobj(optionCity) }}</p>
        <select v-model='data.selectCity'>
          <option v-for="option in optionCity" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>选择区</span>
        <p class="gray" :class='{col6: data.selectDist !== defVal }'>{{data.selectDist | optionArrobj(optionDist) }}</p>
        <select v-model='data.selectDist'>
          <option v-for="option in optionDist" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>详细地址</span>
          <input type="text" placeholder="不必重复填写省市区信息" v-model.trim='data.address'>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
  //引用json数据
  import cityData from '../../data/city.json'

  export default {
    data() {
      return {
        data: {
          comName: '',
          tel: '',
          type: '请选择',
          inTime: '',
          salary: '',
          selectProy: '请选择',
          selectCity: '请选择',
          selectDist: '请选择',
          address: ''
        },
        defVal: '请选择',
        tempData: {},
        optionType: ['国家机关', '公共事业单位', '学校', '医院', '银行', '全球500强', '上市公司', '国企', '非营利性公益组织', '民营企业', '自由职业者', '其它'],
        optionProy: [],
        optionCity: [],
        optionDist: []
      }
    },
    methods: {
      saveInfo() {
        // 保存信息时，可以在此判断
        let checkCHA = /[\u4E00-\u9FA5]{2,}/,
          checkTel = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)/;
        if (checkCHA.test(this.data.comName) === false) this.$dialog("公司名格式不正确");
        else if (checkTel.test(this.data.tel) === false) this.$dialog("固话格式不正确");
        else if (this.data.type === this.defVal) this.$dialog("请选择公司类型");
        else if (this.data.inTime === '') this.$dialog("入职时间不能为空");
        else if (this.data.salary === '') this.$dialog("月薪不能为空");
        else if (this.data.selectProy === this.defVal) this.$dialog("请选择所在省");
        else if (this.data.selectCity === this.defVal) this.$dialog("请选择所在市");
        else if (this.data.selectDist === this.defVal) this.$dialog("请选择所在区");
        else if (checkCHA.test(this.data.address) === false) this.$dialog("详情地址格式不正确");
        else {
          this.$store.commit('uploadCreditStatu', {
            name: 'userWork',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userWork',
            val: JSON.stringify(this.data)
          });
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back();
          }, 2000)
        }
      },
      setCityList() {
        // 当选择“省”后，开始组织数据到城市
        this.optionCity = this.replyData(this.data.selectProy);
        if (this.data.selectProy !== this.tempData.selectProy) {
          this.data.selectCity = this.defVal;
          this.data.selectDist = this.defVal;
          this.optionDist = [];
        }
      },
      setDistList() {
        // 当选择“市”后，开始组织数据到县/区 (如果遇到空的情况就返回无)
        this.optionDist = this.replyData(this.data.selectCity).length === 0 ? [{
          "code": "无",
          "address": "无"
        }] : this.replyData(this.data.selectCity);
        if (this.data.selectCity !== this.tempData.selectCity) {
          this.data.selectDist = this.defVal
        }
      },
      replyData(name) {
        // 组织数据 --> [{"code":"xxx","address":"xxx"},{..}...]
        let data = cityData[name];
        let newArr = [];
        for (let arr in data) {
          let obj = {};
          obj['code'] = arr;
          obj['address'] = data[arr];
          newArr.push(obj)
        }
        return newArr
      }
    },
    filters: {
      optionArrobj: function (value, obj) {
        let newObj = {};
        if (value === '请选择' || value === '') return value;
        else {
          for (let i = 0; i < obj.length; i++) newObj[obj[i].code] = obj[i].address;
          return newObj[value]
        }
      }
    },
    watch: {
      "data.selectProy": "setCityList",
      "data.selectCity": "setDistList"
    },
    mounted() {
      // 页面加载时
      if (this.$store.state.creditStatus['userWork'] === true) {
        if (this.$store.state.creditDatas['userWork'] !== undefined) {
          this.data = JSON.parse(this.$store.state.creditDatas['userWork'])
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
      this.optionProy = cityData["86"]
    }
  }
</script>
