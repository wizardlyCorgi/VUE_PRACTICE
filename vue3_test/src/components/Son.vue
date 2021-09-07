<template>
  <div class="son">
    <h1>我是孙组件</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
  name: 'Son',
  setup () {
    const personF = inject('ren')
    console.log(personF)
    return {
      ...toRefs(personF)
    }
  }
}
</script>

<style>
.son {
  background-color: rebeccapurple;
  padding: 10px;
}
</style>
