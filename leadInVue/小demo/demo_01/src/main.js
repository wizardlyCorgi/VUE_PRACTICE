// 项目的入口文件,npm run 之后先执行这里
// 引入Vue.js
import Vue from 'vue'
// 导入主应用
import App from './App.vue'
// 关闭开发环境报的警告
Vue.config.productionTip = false

// 创建一个Vue实例对象
new Vue({
  render: h => h(App)
}).$mount('#app')
new Vue({
  el: '#app',
  render: h => h(App)
})
