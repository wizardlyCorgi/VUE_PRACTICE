<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ sex }}</h2>
  <h2>工作:{{ obj.type }}</h2>
  <h4>{{ num }}</h4>
  <button @click="add">点我加一</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'Test3',
  setup () {
    // 数据
    let name = ref('小明')
    let age = ref(19)
    let sex = ref('男')
    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })
    const obj = reactive({
      type: '前端工程师',
      salary: '30K'
    })
    // ref()包裹之后,把num变量加工为一个RefImpl的实例引用对象,具有响应式,模板中渲染依旧是{{num}}不变
    // ref(引用) impl(实现)
    let num = ref(1)
    function add () {
      // 操作数据的时候需要num.value去
      // num.value++
      console.log(job.value)
      // job.value.type = 'UI工程师'
      obj.type = 'UI工程师'
    }

    return {
      name,
      age,
      sex,
      num,
      job,
      add,
      obj
    }
  }
}
</script>

<style></style>
