<template>
  <!-- vue3中template不用只局限于一个标签下,可以有多个标签在外层,在vue2中是必须只有一个最外层标签包裹 -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <div>哈哈哈</div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
