#文件说明
components文件夹存放的为子组件or待全局注册组件

```pre

├── borrow                   // 组件-应用于个人中心/我的借款 
│   ├── list.vue             // li使用的组件
│   └── title.vue            // tab头切换
├── common                   // 通用组件
│   ├── footer.vue           // 底部
│   ├── list.vue             // li通用组件
│   ├── noMore.vue           // 没有更多
│   ├── pageError.vue        // 页面错误
│   ├── sendSMS.vue          // 发送短信倒计时
│   └── top.vue              // 头部
├── loan                     // 组件-借款子页面用
│   ├── banner.vue           // 借款首页banner切图滚动图
│   ├── detail.vue           // 内容页详情
│   └── top.vue              // 内容页头部
├── popup                    // 通用弹出框组件
│   ├── alertCheck.vue       // 提示框-带验证功能
│   ├── alertKnow.vue        // 提示框-弹知识
│   ├── alertTips.vue        // 提示框-弹提示
│   ├── delay.vue            // 等待图-圆转圈
│   └── dialog.vue           // diglog错误/正功提示
├── reward                   // 组件-应用于个人中心/我的奖励
│   ├── list.vue             // li使用的组件
│   └── title.vue            // tab头切换
├── home.vue                 // 根组件
├── index.js                 // 组件引用注册（main.js引用-注册全局）

```