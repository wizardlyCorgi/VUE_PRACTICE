<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Father></Father> -->
    <RouterTest></RouterTest>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Father from './views/VuexPactice/Father.vue'
import RouterTest from './views/RouterTest'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    RouterTest
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
