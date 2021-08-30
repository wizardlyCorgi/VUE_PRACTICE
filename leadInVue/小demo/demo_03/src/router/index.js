//引入Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入组件
import Home from '../views/RouterTest/Home.vue'
import About from '../views/RouterTest/About.vue'
import News from '../views/RouterTest/News.vue'
import Messages from '../views/RouterTest/Messages.vue'
import MessageChildren from '../views/RouterTest/MessageChildren.vue'
// 使用应用
Vue.use(VueRouter)
// 注册路由器
const routes = [
  // 一级路由
  {
    path: '/Home',
    component: Home,
    name: 'Home',
    // 二级路由
    children: [
      {
        path: 'News',
        component: News
      },
      {
        path: 'Messages',
        component: Messages,
        // 三级路由
        children: [
          {
            path: 'MessageChildren',
            component: MessageChildren
            // 通过props传递参数
            // props (route) {
            // 接受的参数是当前的路由对象
            //   return {
            //     message: route.query.message
            //   }
            // }
          }
        ]
      }
    ]
  },
  {
    path: '/About',
    component: About,
    name: 'About'
  }
]
const router = new VueRouter({
  routes
})
export default router
