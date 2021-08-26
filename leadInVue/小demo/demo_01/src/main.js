// 项目的入口文件,npm run 之后先执行这里
// 引入Vue.js
import Vue from 'vue'
// 导入主应用
import App from './App.vue'
// 引入vuex
import store from './store'
// 关闭开发环境报的警告
Vue.config.productionTip = false

// 创建一个Vue实例对象
new Vue({
  render: h => h(App),
  // 配置vuex在Vue实例中,这样每一个vm和vc都能访问到$store
  store,
  // 挂载全局变量$bus
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
