import Vue from 'vue'
import App from './App.vue'
// 引入vuex
import store from './store'
// import { Button, Select } from 'element-ui'
// 引入组件
import element from './plugins/element'
// import 'element-ui/lib/theme-chalk/index.css'
// 引入antv/f2组件
// const F2 = require('@antv/f2')
import F2 from '@antv/f2'
// 引入uuid库
import UUID from 'vue-uuid'

Vue.config.productionTip = false
Vue.use(F2)
Vue.use(element)
Vue.use(UUID)
Vue.prototype.$f2 = F2
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// 引入路由器
import router from './router'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
