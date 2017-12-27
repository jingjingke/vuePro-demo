<template>
  <transition name="scale">
    <div class="dialogBg" v-if="visible">
      <div :class="['dialog',cls]">{{msg}}</div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      'msg': {
        type: String,
        default: '未知错误'
      },
      'visible': {
        type: Boolean,
        default: false
      },
      'cls':{
        type: String,
        default: 'sort'
      }
    },
    watch: {
      'visible': function (value) {
        if (value === true) {
          setTimeout(() => {
            this.visible = false;
          }, 1500)
        }
      }
    }
  }
</script>
<style lang="scss">
  // 引入通用混合
  @import './../../assets/sass/_mixin.scss';

  // 使用样式
  .dialogBg { position: fixed; z-index: 99999; width:100%; height: 100%; top: 0; left: 0; background: transparent;}
  .dialog {
    @include point(width,270);
    @include point(line-height,80);
    @include point(font-size,28);
    @include box(padding,22);
    position:fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    @include box(margin,-82,0,0,-135);
    @include box(padding,20,0);
    background-color: rgba(0,0,0,0.8);
    @include point(border-radius,10);
    text-align: center;
    color: #fff;
    opacity: 1;
    transition: all 0.2s;
    &:before {
      @include icons;
      @include point(font-size,48);
      @include point(line-height,60);
      @include point(padding-top,10);
    }
    &.false:before { content: $iconFalse; }
    &.true:before { content: $iconTrue; }
    &.text:before,&.sort:before { display:none; }
    &.text,&.sort {
      @include point(width,492);
      @include box(margin,-56,0,0,-246);
      @include point(padding-top,16);
      height:auto;
    }
    &.sort {
      @include point(width,270);
      @include point(margin-left,-135);
    }
  }
</style>
