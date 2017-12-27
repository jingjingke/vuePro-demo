import Vue from 'vue';
import dialog from './index.vue'

// 构造子类
const Dialog = Vue.extend(dialog);

// 创建实例
let	instance = new Dialog({
  el: document.createElement('div')
});

const DialogEl = function(options){
  // 将参数传给msg
  if(typeof options === 'string') {
    instance.msg = options;
    instance.cls = 'sort';
  }else{
    instance.msg = options[0];
    instance.cls = options[1] || 'sort';
  }

  // 显示组件
  instance.visible = true;
  // 插入页面
  document.body.appendChild(instance.$el);
}

export default DialogEl;

