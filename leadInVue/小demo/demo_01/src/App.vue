<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <GithubCase /> -->
    <List v-show="isShow" @aa="aa" />
    <button @click="to">显示</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import GithubCase from './views/GithubCase.vue'
import List from './views/List'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // GithubCase
    List
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    aa (b, f) {
      console.log(b, f)
      this.isShow = b
    },
    to () {
      this.isShow = true
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
