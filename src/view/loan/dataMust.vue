<template>
  <div class="container">
    <topComponent title='必填资料'></topComponent>
    <div class="listTop">
      <p class="tCenter col9">{{appName}}承诺你的信息安全</p>
    </div>
    <ul class="mustInfo">
      <li v-for="(data,index) of lists" :class="{lock:data.isLock, arrow:!data.isLock, wait:!data.isLock, ok:data.isOk }" @click='pushLink(index)'>
        <i :class="data.icon"></i><span>{{data.step}}</span><b>{{data.tit}}</b>
      </li>
    </ul>
    <p class="infoLink tCenter"><span class="arrow" @click="$router.push('/loan/dataSelect')">选填资料</span>资料越完善，审核通过率越高，借款费用越低</p>
    <div class="btnWarp">
      <span class="subBtn" :class='{grayBg:!checked}' @click="goApply">申请借款</span>
    </div>
    <div class="agreeMent mt20" :class='{ no : !checked }' @click='checked = !checked'>
      我已阅读并同意<span class="blue" @click.stop="goAgreem('/agreement')">《个人信息收集授权协议》</span>
      <input type="checkbox" v-model="checked">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,     // 开关--同意协议
        lists: [{
          icon: 'icon01',
          isLock: false,
          isOk: false,
          step: '第一步',
          tit: '身份认证',
          param: 'userInfo',
          push: '/credit/userInfo',
          err: '请进行身份认证'
        },
          {
            icon: 'icon02',
            isLock: true,
            isOk: false,
            step: '第二步',
            tit: '人脸识别',
            param: 'userScan',
            push: '/credit/scan',
            err: '请进行人脸识别'
          },
          {
            icon: 'icon03',
            isLock: true,
            isOk: false,
            step: '第三步',
            tit: '紧急联系人',
            param: 'userContacts',
            push: '/credit/contacts',
            err: '请填写紧急联系人'
          },
          {
            icon: 'icon04',
            isLock: true,
            isOk: false,
            step: '第四步',
            tit: '手机认证',
            param: 'userPhone',
            push: '/credit/mobile',
            err: '请进行手机认证'
          },
          {
            icon: 'icon05',
            isLock: true,
            isOk: false,
            step: '第五步',
            tit: '工作信息',
            param: 'userWork',
            push: '/credit/work',
            err: '请填写工作信息'
          }
        ]
      }
    },
    methods: {
      goApply() {
        if (this.checked === false) this.$dialog('请阅读并同意协议');
        else if (this.lists[0].isOk === false) this.$dialog(this.lists[0].err);
        else if (this.lists[1].isOk === false) this.$dialog(this.lists[1].err);
        else if (this.lists[2].isOk === false) this.$dialog(this.lists[2].err);
        else if (this.lists[3].isOk === false) this.$dialog(this.lists[3].err);
        else if (this.lists[4].isOk === false) this.$dialog(this.lists[4].err);
        else {
          // 暂代
          this.$router.push('/loan/submitApply')
        }
      },
      showClass(arr) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.$store.state.creditStatus[this.lists[i].param] === false) {
            this.lists[i].isLock = false;
            break;
          } else {
            this.lists[i].isLock = false;
            this.lists[i].isOk = true;
          }
        }
      },
      pushLink(index) {
        let flag = false;
        if (this.lists[index].isLock === true) {
          for (let i = 0; i < index; i++) {
            if (this.lists[i].isOk === false) {
              this.callDialog(this.lists[i].err);
              flag = true;
              break;
            }
          }
          if (flag === false) this.$router.push(this.lists[index].push);
        } else {
          this.$router.push(this.lists[index].push);
        }
      }
    },
    computed: {
      //查看缓存
      watchLocal () {
        let obj = {};
        for (let i = 0; i < this.lists.length; i++) {
          obj[i] = this.$store.state.creditStatus[this.lists[i].param]
        }
        return obj
      }
    },
    watch: {
      watchLocal: {
        handler: function (nowVal, oldVal) {
          //观擦计算返回的新数据-->调用样式显示的函数
          if (nowVal !== oldVal) this.showClass(this.lists)
        },
        deep: true
      }
    },
    created() {
      //创建页面的时候先查看缓存中是否有值，将样式显示全
      this.showClass(this.lists)
    }
  }
</script>
