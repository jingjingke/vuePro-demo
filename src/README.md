#文件说明
项目文件说明：assets[静态资源]、components[组件]、config[全局方法过滤器]、data[引用json数据]、views[业务页面]、以及入口和路由配置文件
```pre

├── assets                   // 静态资源(css,font,img,js)
│   ├── css                  // css
│   ├── font                 // font[eot/otf/svg/ttf/woff]
│   ├── img                  // img
│   ├── lib                  // js
│   ├── demo                 // 静态切图页面(git上传时忽略)
│   └── sass                 // scss样式文件(git上传时忽略)
├── components               // vue组件
│   ├── borrow               // 组件-个人中心/我的借款
│   ├── common               // 通用组件（如头尾）
│   ├── loan                 // 组件-借款子页面用
│   ├── popup                // 通用弹出框组件
│   ├── reward               // 组件-个人中心/我的奖励
│   ├── home.vue             // 根组件
│   └── index.js             // 组件引用注册（main.js引用-注册全局）
├── config                   // Vue全局方法/过滤器
│   ├── filters.js           // Vue过滤器（main.js引用-注册全局）
│   └── methods.js           // Vue方法（main.js引用-注册全局）
├── data                     // 数据文件(json)
│   ├── order                // 后期需ajax-order接口
│   ├── repay                // 后期需ajax-repay接口
│   ├── user                 // 后期需ajax-user接口
│   └── *.json               // 页面中引用的静态json
├── store                    // vuex-文件夹
│   ├── index.js             // 引入vuex相关文件
│   ├── mutations.js         // vuex-mutations
│   └── state.js             // vuex-state
├── views                    // 业务页面
│   ├── credit               // 业务-信用模块
│   ├── loan                 // 业务-借款模块
│   ├── other                // 业务-其它模块(如登录/注册/404等)
│   └── user                 // 业务-个人中心模块
├── main.js                  // 项目入口文件
├── router.js                // 路由配置

```