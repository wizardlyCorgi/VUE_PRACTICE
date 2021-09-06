<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Test3 /> -->
  <!-- <ComputedTest></ComputedTest> -->
  <WatchTest></WatchTest>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test3 from './components/Test3.vue'
// import ComputedTest from './components/ComputedTest.vue'
import WatchTest from './components/WatchTest.vue'

export default {
  name: 'App',
  components: {
    // Test3,
    // ComputedTest,
    WatchTest
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
