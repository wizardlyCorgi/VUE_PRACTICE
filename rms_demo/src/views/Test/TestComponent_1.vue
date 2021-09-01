<template>
  <div class="test1">
    <h1>我是路由测试组件1</h1>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'TestComponent_1',
  mounted () {
    this.$store.dispatch('testFun', 1)
    this.$store.commit('TEST_FUN', 2)
  }
}
</script>

<style></style>
