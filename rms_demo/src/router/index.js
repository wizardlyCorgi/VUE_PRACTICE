// 引入vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入组件
import HelloWorld from '../components/HelloWorld.vue'
import TestComponent from '../views/Test/TestComponent_1.vue'
// 在挂载到vue实例身上,挂载之后vue身上就有$router和$route这两个对象
Vue.use(VueRouter)
// 配置路由参数
const routes = [
  {
    path: '/hello',
    component: HelloWorld,
    // 路由元
    meta: {
      title: '你好,世界'
    }
  },
  {
    path: '/test',
    component: TestComponent,
    // 路由元
    meta: {
      title: '你好,测试'
    }
  }
]
// 创建一个路由器
const router = new VueRouter({
  // 配置路由 history模式
  mode: 'history',
  routes
})
export default router
