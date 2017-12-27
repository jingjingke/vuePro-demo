<template>
  <div class="container">
    <topComponent :title='data.tit'>
      <span class="save" @click='saveData' slot='right'>保存</span>
    </topComponent>
    <p class="listTop">{{data.des}}</p>
    <ul class="uploadPic" id="setUploadWarp">
      <li v-for='(file,index) of fileData' @click='delThisImg(index)'><img :src='file'></li>
      <li class="upload-btn" v-show='showInput'>
        <label>
          <input type="file" @change='myChange'/>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
  // 引入模拟data
  import helpDatas from '../../data/dataUploan.json'

  export default {
    data() {
      return {
        data: {},
        title: '',
        scroll: '',
        inputfile: '',
        sid: '',
        fileData: [],
        tempData: [],
        showInput: true,
        hasChange: false
      }
    },
    methods: {
      saveData() {
        // 保存信息，可以在此判断
        if (this.fileData.length === 0) {
          this.$store.commit('uploadOhterPicData', {
            name: this.sid,
            val: ''
          });
          this.$store.commit('changeOhterPicStatu', {
            name: this.sid,
            val: false
          });
        } else {
          this.$store.commit('uploadOhterPicData', {
            name: this.sid,
            val: JSON.stringify(this.fileData)
          });
          if (this.fileData.length === helpDatas[this.sid].num) {
            this.$store.commit('changeOhterPicStatu', {
              name: this.sid,
              val: true
            })
          } else {
            this.$store.commit('changeOhterPicStatu', {
              name: this.sid,
              val: false
            })
          }
        }
        this.$dialog(["保存成功", "true"]);
        setTimeout(() => {
          this.$router.back()
        }, 2000);
      },
      myChange(e) {
        let that = this;
        let thisFile = e.target.files[0];
        let support = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        if (thisFile && support.indexOf(thisFile.type) >= 0) {
          //上传图片格式正确，开始试着转base64
          if (typeof FileReader !== 'undefined') {
            let reader = new FileReader();
            reader.readAsDataURL(thisFile);
            reader.onload = function () {
              if (that.checkArry(that.fileData, this.result)) that.$dialog(["请不要重复上传同一张图片", "text"])
              else {
                that.hasChange = true;
                that.fileData.push(this.result)
              }
            }
          } else {
            this.$dialog(["您的浏览器版本过低无法预览", 'text'])
          }
          //转base64完成
        } else {
          this.$dialog('上传图片格式不对')
        }
        //判断上传格式完成
      },
      delThisImg(idx) {
        //删除当前缩略图
        this.fileData.splice(idx, 1);
        this.hasChange = true
      },
      limitImg() {
        //根据json中提供的num限止显示个数
        if (this.fileData.length === this.data.num) this.showInput = false;
        else this.showInput = true;
      },
      checkArry(arr, str) {
        let i = arr.length;
        while (i--) {
          if (arr[i] === str) return true
        }
        return false;
      }
    },
    watch: {
      "fileData": "limitImg"
    },
    mounted: function () {
      //获取当前页面标识
      this.sid = this.$route.params.param;
      //拉取数据
      this.data = helpDatas[this.sid];
      //查看缓存中是否有数据
      let picDatas = this.$store.state.ohterPicDatas[this.sid];
      if (picDatas !== undefined && picDatas !== '') {
        this.fileData = JSON.parse(picDatas)
      }
    }
  }
</script>
