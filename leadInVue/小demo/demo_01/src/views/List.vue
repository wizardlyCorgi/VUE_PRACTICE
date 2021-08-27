<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="bb">测试</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      n: 1
    }
  },
  methods: {
    increment () {
      // 触发actions方法
      // this.$store.dispatch('summation', this.n)
      // 如果actions中的逻辑不是很复杂,可以直接触发mutations的方法,越过actions
      this.$store.commit('SUMMATION', this.n)
    },
    decrement () {
      this.$store.dispatch('subtract', this.n)
    },
    incrementOdd () {},
    incrementWait () {},
    bb () {
      // console.log(11)
      this.$emit('aa', false, 11)
    }
  }
}
</script>

<style>
.list {
  display: flex;
  justify-content: space-around;
}
button {
  margin-left: 10px;
}
</style>
