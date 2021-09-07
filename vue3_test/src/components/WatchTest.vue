<template>
  <h1>当前的求和是:{{ sum }}</h1>
  <button @click="sum++">
    点击求和
  </button>
  <hr />
  <h1>当前的信息是:{{ msg }}</h1>
  <button @click="msg += '!'">点击修改信息</button>
  <hr />
  <button @click="test111">哈哈哈哈</button>
  <div>
    <h1>姓名:{{ person }}</h1>
    <h1>姓名:{{ name }}</h1>
    <h1>年龄:{{ age }}</h1>
    <h1>薪资:{{ salary }}K</h1>
    <button @click="name += '!'">点击修改姓名</button>
    <button @click="age++">点击修改年龄</button>
    <button @click="salary++">点击修改薪资</button>
  </div>
</template>

<script>
import {
  ref,
  watchEffect,
  onMounted,
  toRefs,
  toRef,
  // shallowReactive,
  reactive
  //   shallowRef
} from 'vue'
export default {
  setup (prop, context) {
    console.log(prop, 25)
    console.log(context, 26)
    // 数据
    let sum = ref(0)
    let msg = ref('你好鸭')
    // shallowReactive只对第一层的属性有响应式处理,深层次的没有响应式
    // shallowRef只对基本数据类型的响应式,不对对象进行响应式处理
    let person = reactive({
      // let person = shallowRef({
      name: '张三',
      age: 19,
      job: {
        s: {
          salary: 20
        }
      }
    })
    // #region
    // 监听
    // 第一种情况:监听ref定义的单个数据,传入三个参数
    // 1,监听的对象2,监听的回调函数3,其他配置(立即执行以及深度监听(一般复杂类型用reactive定义))
    // watch(
    //   sum,
    //   (newVal, oldVal) => {
    //     console.log('我出发了', newVal, oldVal)
    //   },
    //   { immediate: true }
    // )
    // 第二种情况:监听ref定义的多个数据传入三个参数
    // 1.监听的对象,此时写法为数组,里面的元素对应了监听的每一个对象,2监听的回调函数,此时这里的newVal和oldVal的值均变为数组,里面的值对应传入数组的变化值3,其他配置
    // watch(
    //   [sum, msg],
    //   (newVal, oldVal) => {
    //     console.log('我出发了', newVal, oldVal)
    //   },
    //   { immediate: true }
    // )
    // 第三种情况:监听reactive定义的全部数据,传入三个参数
    // 1,监听的对象,2,监听的回调函数,3,其他的配置
    // 坑:1,回调的参数,newVal和oldVal是一样的,无法获取正确的oldVal
    // 坑:2,其他配置中,deep配置无效,而且recative定义的数据默认开启deep监听且关不掉
    // watch(
    //   person,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    //   },
    //   { deep: false }
    // )
    // 第四种情况:监听recative定义的数据中的一个
    // 1,监听的对象,但是写法要写成函数并返回一个值,不然无效,2,监听的回调函数,3,其他的配置
    // 注意:这里的写法是以函数形式返回,且回调中newVal,oldVal的值是正常的
    // watch(
    //   () => person.name,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    //   }
    //   //   { deep: true }
    // )
    // 第五种情况:监听recative定义的数据中的多个
    // 1,监听多个以数组形式传入,且每一个以函数形式返回2,这里的newVal,oldVal的值是正常的
    // watch([() => person.name, () => person.age], (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })
    // 特殊情况:监听recative定义的数据中的复杂类型的值
    // 1,需要deep配置,不会默认开启deep
    // watch(
    //   () => person.job.s.salary,
    //   (newVal, old) => {
    //     console.log(newVal, old)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    // #endregion
    watchEffect(() => {
      console.log('我执行了')
      const a = sum.value
      console.log(a)
    })
    onMounted(() => {
      console.log(111)
    })
    return {
      sum,
      msg,
      salary: toRef(person.job.s, 'salary'),
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style></style>
