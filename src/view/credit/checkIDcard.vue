<template>
  <div class="container">
    <topComponent title='身份认证'></topComponent>
    <p class="listTop">请拍摄身份证正反两面，以便确认身份</p>
    <ul class="photoCamera">
      <li class="facade" :class='{noCamera:data.pic1 === ""}'>
        <i class="cameraIcon" @click='getPic1'>正面</i>
        <img :src='data.pic1' v-if='data.pic1 !== ""'>
      </li>
      <li class="obverse" :class='{noCamera:data.pic2 === ""}'>
        <i class="cameraIcon" @click='getPic2'>拍照</i>
        <img :src='data.pic2' v-if='data.pic2 !== ""'>
      </li>
    </ul>
    <ul class="formCom mt20">
      <li>
        <div>请确认身份证信息，如<span class="red">有误请重拍</span></div>
      </li>
      <li>
        <label>
          <span>姓名</span>
          <input type="text" placeholder="请点击上方按钮拍照识别" readonly="readonly" v-model='data.name'>
        </label>
      </li>
      <li>
        <label>
          <span>身份证</span>
          <input type="text" readonly="readonly" v-model='data.id'>
        </label>
      </li>
      <li>
        <label>
          <span>签发机关</span>
          <input type="text" readonly="readonly" v-model='data.issued'>
        </label>
      </li>
      <li>
        <label>
          <span>有效期限</span>
          <input type="text" readonly="readonly" v-model='data.valid'>
        </label>
      </li>
    </ul>
    <div class="btnWarp">
      <span class="subBtn" @click='goSubmit'>确认</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {
          pic1: '',
          pic2: '',
          name: '',
          id: '',
          issued: '',
          valid: ''
        },
        imgSrc: "https://cgtzimage.b0.upaiyun.com/projectTests//151800/00/00/81/2016/11/07/4EFEC782-8B33-7886-CE53-BBFCA82CE419.jpg"
      }
    },
    methods: {
      goSubmit() {
        // 确认按钮，可以在此判断
        if (this.data.name === '' || this.data.id === '') this.$dialog("请重拍身份证正面");
        else if (this.data.issued === '' || this.data.valid === '') this.$dialog("请重拍身份证背面");
        else {
          this.$store.commit('uploadCreditStatu', {
            name: 'userIdpic',
            val: true
          });
          this.$store.commit('uploadCreditData', {
            name: 'userIdpic',
            val: JSON.stringify(this.data)
          });
          this.$dialog(["保存成功", "true"]);
          setTimeout(() => {
            this.$router.back()
          }, 2000);
        }
      },
      getPic1() {
        // 数据都是暂代的；实际情况还需要接入第三方
        this.data.pic1 = this.imgSrc;
        this.data.name = '测试数据';
        this.data.id = '320721199010022431';
      },
      getPic2() {
        // 数据都是暂代的；实际情况还需要接入第三方
        this.data.pic2 = this.imgSrc;
        this.data.issued = "杭州市余杭区五常派出所";
        this.data.valid = "2020-10-20";
      }
    },
    mounted() {
      // 页面加载时
      if (this.$store.state.creditStatus['userIdpic'] === true) {
        if (this.$store.state.creditDatas['userIdpic'] !== undefined) {
          this.data = JSON.parse(this.$store.state.creditDatas['userIdpic'])
        } else {
          // 如果vuex中未存储数据则发送ajax
          console.log('发送ajax')
        }
      }
    }
  }
</script>
