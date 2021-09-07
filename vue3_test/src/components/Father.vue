<template>
  <div class="father">
    <h1>我是祖父组件</h1>
    <h1>{{ person.name }}</h1>
    <h1>{{ person.age }}</h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
import {
  ref,
  reactive,
  // toRefs,
  provide,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
  readonly,
  toRaw
} from 'vue'
export default {
  name: 'Father',
  components: { Child },
  setup () {
    let color = ref('red')
    let someOne = ref('zhangsan')
    let one = readonly({
      a: 1,
      b: 2
    })
    let person = reactive({
      name: '张三',
      age: 16
    })
    provide('ren', person)
    console.log(isRef(someOne))
    console.log(isReactive(person))
    console.log(isReadonly(one))
    // 转为普通对象
    person = toRaw(person)
    console.log(isProxy(person))
    console.log(person)
    // 用readonly定义的变量也是proxy对象,只是没有响应式了而已
    console.log(isProxy(one))
    return {
      //   ...toRefs(person)
      person,
      color
    }
  }
}
</script>

<style>
.father {
  background-color: v-bind(color);
  padding: 10px;
}
</style>
