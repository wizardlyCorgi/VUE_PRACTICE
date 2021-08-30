import Vue from 'vue'
import App from './App.vue'
// 引入vuex
import store from './store'
Vue.config.productionTip = false
// 引入路由器
import router from './router'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
