<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="push">跳转路由</button>
        <button @click="parmas">跳转路由parmas</button>
        <button @click="$router.go(-2)">后退二步</button>
        <button @click="getData">获取数据</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link
            class="list-group-item "
            active-class="active"
            to="/About"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/Home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <!-- 路由视图出口,它在哪里路由对应的组件的内容就显示在哪里 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RouterTest',
  mounted () {
    // console.log(this.$router)
  },
  methods: {
    back () {
      this.$router.back()
    },
    forward () {
      this.$router.forward()
    },
    push () {
      this.$router.push({
        path: '/Home',
        query: {
          id: '001',
          message: 'hello'
        }
      })
    },
    parmas () {
      this.$router.push({
        name: 'About',
        params: {
          id: '002',
          message: 'zzzzz'
        }
        // query: {
        //   id: '001',
        //   message: 'hello'
        // }
      })
    },
    getData () {
      console.log(process.env)
      axios
        .get(`${process.env.VUE_APP_PROXY_URL}/api/person`) //多个代理区分加/api标识,在vue.config.js中设置
        // .get(`${process.env.VUE_APP_PROXY_URL}/person`)//一个代理则不需要直接写就好
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
