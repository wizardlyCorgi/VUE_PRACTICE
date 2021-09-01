import Vue from 'vue'
import App from './App.vue'
// 引入vuex
import store from './store'
// import { Button, Select } from 'element-ui'
// 引入组件
import element from './plugins/element'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(element)
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// 引入路由器
import router from './router'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
