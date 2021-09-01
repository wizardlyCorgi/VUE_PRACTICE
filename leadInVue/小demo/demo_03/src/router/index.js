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
    meta: {
      title: '家'
    },
    // 二级路由
    children: [
      {
        path: 'News',
        component: News,
        meta: {
          needLogin: true,
          title: '新闻'
        },
        name: 'News'
      },
      {
        path: 'Messages',
        component: Messages,
        name: 'Message',
        meta: {
          title: '信息'
        },
        // 三级路由
        children: [
          {
            path: 'MessageChildren',
            component: MessageChildren,
            meta: {
              title: '信息儿子们'
            }
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
    name: 'About',
    meta: {
      title: '关于'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 前置导航守卫(初始化和每次切换路由之前被调用)
// 路由跳转前做一些处理,安全拦截之类的
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // to 是要去的路由的信息对象
  // form 是当下路由跳转前的路由信息对象
  // next() 必须调用,不然不能跳转
  //   console.log(to)
  //   console.log(from)
  // 先判断是否需要登录,需要则判断是否登录,不需要则不需要往下走
  if (to.meta.needLogin) {
    const token = localStorage.getItem('login')
    if (token === '登录了') {
      next()
    } else {
      alert('未登陆,请先登录')
      // 跳转登录页面
      console.log(router, 'router')
      router.push('/')
    }
  } else {
    next()
  }
})
// 后置守卫(初始化和每次路由切换后被调用)
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log(to, from)
  document.title = to.meta.title || '测试系统'
})

export default router
