import Vue from 'vue';
import VueRouter from "vue-router";
import store from './store'

Vue.use(VueRouter);

//引入根模板
import home from './components/home';
//引入路由配置信息
import routes from './router';
//定义路由配置
var router = new VueRouter({
	hashbang: false,
	history:true,
	routes:routes,
	scrollBehavior:function(to,from,savedPosition){
		return { "x":0 , "y": 0 }
	}
})

//通过components下的index.js文件导入组件
import components from './components/';
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key)=>{
	Vue.component(key,components[key])
})

//通过filters.js导入自定义用于过滤的函数
import filters from './config/filters';
//对导入的函数进行全局过滤器注册
Object.keys(filters).forEach((key)=>{
	Vue.filter(key,filters[key])
})

//methods.js导入自定义方法(/变量)用于全局方法
import methods from './config/methods';
//方法挂靠全局
Object.keys(methods).forEach((key)=>{
	Vue.prototype[key] = methods[key];
})


var app = new Vue({
	router,
	store,
	render: h => h(home)
}).$mount('#app')