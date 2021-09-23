<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="getAxios">发请求测试</button>
      <button @click="getAxios2">发请求测试</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import { getData } from '../src/services/api'
export default {
  name: 'App',
  methods: {
    getAxios () {
      console.log('点击事件----')
      axios.get('http://localhost:8082/mode2/DataOne').then(response => {
        console.log(response)
      })
    },
    getAxios2 () {
      console.log('111')
      getData()
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
