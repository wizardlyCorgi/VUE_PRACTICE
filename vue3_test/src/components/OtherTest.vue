<template>
  <!-- 需求:输入框输入之后,下面等待1s再显示变化 -->
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
// 用自定义ref写防抖函数
import { customRef } from 'vue'
export default {
  setup () {
    // let keyword = ref('你好')
    // 手写一个函数
    function myRef (value, delay) {
      let timer
      // 第一个return返回customRef的执行结果
      return customRef((track, trigger) => {
        // 这里的return 返回customRef内部执行结果
        return {
          get () {
            track() // 告诉Vue这个值是要被追踪的
            // 这里的return 把值return出去
            return value
          },
          set (newVal) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newVal
              trigger() // 告诉Vue去更新界面
            }, delay)
          }
        }
      })
    }

    let keyword = myRef('hello', 500)

    return {
      keyword
    }
  }
}
</script>

<style></style>
