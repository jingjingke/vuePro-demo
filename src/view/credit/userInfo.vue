<template>
  <div class="container">
    <topComponent title='个人信息'>
      <span class="save" @click='saveInfo' slot='right'>保存</span>
    </topComponent>
    <p class="listTop">请仔细填写正确的个人信息</p>
    <ul class="formCom">
      <li>
        <label>
          <span>姓名</span>
          <input type="text" placeholder="请输入真实姓名" v-model.trim='data.name'>
        </label>
      </li>
      <li>
        <label>
          <span>身份证号</span>
          <input type="text" placeholder="请输入本人身份证号" v-model.trim='data.id'>
        </label>
      </li>
      <li class="icon-arrow">
        <span>性别</span>
        <p>{{ data.selectSex | optionTxt(optionSex) }}</p>
        <select v-model='data.selectSex'>
          <option v-for='option in optionSex' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>学历</span>
        <p>{{ data.selectEdu | optionTxt(optionEdu) }}</p>
        <select v-model='data.selectEdu'>
          <option v-for='option in optionEdu' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>婚姻状况</span>
        <p>{{ data.selectMar | optionTxt(optionMar) }}</p>
        <select v-model='data.selectMar'>
          <option v-for='option in optionMar' :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
    </ul>
    <p class="listTop">联系地址</p>
    <ul class="formCom">
      <li class="icon-arrow">
        <span>省</span>
        <p>{{data.selectProy | optionArrobj(optionProy) }}</p>
        <select v-model='data.selectProy'>
          <option v-for="option in optionProy" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>市</span>
        <p>{{data.selectCity | optionArrobj(optionCity) }}</p>
        <select v-model='data.selectCity'>
          <option v-for="option in optionCity" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>区</span>
        <p>{{data.selectDist | optionArrobj(optionDist) }}</p>
        <select v-model='data.selectDist'>
          <option v-for="option in optionDist" :value="option.code">{{option.address}}</option>
        </select>
      </li>
      <li>
        <label>
          <span>详细地址</span>
          <input type="text" placeholder="不必填写省市区" v-model.trim='data.addDetail'>
        </label>
      </li>
      <li class="icon-calendar">
        <label>
          <span>入住时间</span>
          <input type="date" id="myData" v-model='data.checkTime'>
        </label>
      </li>
    </ul>
    <div class="agreeMent mt20 bold" :class='{ no : !checked }' @click='checked = !checked'>
      我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《个人信息收集授权协议》</span>
      <input type="checkbox" v-model="checked">
    </div>
  </div>
</template>
<script>
  //引用json数据
  import cityData from '../../data/city.json'

  export default {
    data() {
      return {
        data: {
          name: '',
          id: '',
          selectSex: '',
          selectEdu: '',
          selectMar: '',
          selectProy: '',
          selectCity: '',
          selectDist: '',
          addDetail: '',
          checkTime: ''
        },
        tempData: {},    // 暂存数据
        checked: true,   // 是否同意协议
        optionSex: [{
          val: '1',
          txt: '男'
        },
          {
            val: '2',
            txt: '女'
          }
        ],
        optionEdu: [{
          val: '1',
          txt: '高中及以下'
        },
          {
            val: '2',
            txt: '专科'
          },
          {
            val: '3',
            txt: '本科'
          },
          {
            val: '4',
            txt: '硕士及以上'
          }
        ],

        optionMar: [{
          val: '1',
          txt: '未婚'
        },
          {
            val: '2',
            txt: '已婚'
          }
        ],
        optionProy: [],
        optionCity: [],
        optionDist: []
      }
    },
    methods: {
      saveInfo() {
        let checkName = /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/,
          checkId = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
          checkAdd = /[\u4E00-\u9FA5]{2,}/;
        //保存信息
        if (this.checked === false) this.$dialog("请阅读并同意协议");
        else if (checkName.test(this.data.name) === false) this.$dialog("姓名格式错误");
        else if (checkId.test(this.data.id) === false) this.$dialog("身份证格式错误");
        else if (this.data.selectSex === '') this.$dialog("请选择您的性别");
        else if (this.data.selectEdu === '') this.$dialog("请选择您的学历");
        else if (this.data.selectMar === '') this.$dialog("请选择婚姻状况");
        else if (this.data.selectProy === '') this.$dialog("请选择目前所在省");
        else if (this.data.selectCity === '' || this.data.selectCity === undefined) this.$dialog("请选择目前所在市");
        else if (this.data.selectDist === '' || this.data.selectDist === undefined) this.$dialog("请选择目前所在区");
        else if (checkAdd.test(this.data.addDetail) === false) this.$dialog("详细地址格式错误");
        else if (this.data.checkTime === '') this.$dialog("请选择入住时间");
        else {
          this.$store.commit('uploadCreditStatu', {
            name: 'userInfo',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userInfo',
            val: JSON.stringify(this.data)
          });
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000)
        }
      },
      setCityList() {
        //当选择“省”后，开始组织数据到城市
        this.optionCity = this.replyData(this.data.selectProy);
        if (this.data.selectProy !== this.tempData.selectProy) {
          this.data.selectCity = '';
          this.data.selectDist = '';
          this.optionDist = []
        }
      },
      setDistList() {
        //当选择“市”后，开始组织数据到县/区 (如果遇到空的情况就返回无)
        this.optionDist = this.replyData(this.data.selectCity).length === 0 ? [{
          "code": "无",
          "address": "无"
        }] : this.replyData(this.data.selectCity);
        if (this.data.selectCity !== this.tempData.selectCity) {
          this.data.selectDist = ''
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
      //页面加载时
      if (this.$store.state.creditStatus['userInfo'] === true) {
        if (this.$store.state.creditDatas['userInfo'] !== undefined) {
          this.data = JSON.parse(this.$store.state.creditDatas['userInfo'])
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
      this.optionProy = cityData["86"]
    }
  }
</script>
