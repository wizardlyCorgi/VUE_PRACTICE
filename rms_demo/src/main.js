// 入口文件,一定一开始是这个文件
import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入store
import store from './store'
// 引入element-ui
import element from './plugins/element'
Vue.use(element)
// import { Button, Select } from 'element-ui'

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
