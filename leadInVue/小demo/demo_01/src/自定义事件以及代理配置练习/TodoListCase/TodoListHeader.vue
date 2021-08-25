<template>
  <div class="header">
    <input
      type="text"
      :placeholder="placeholderText"
      class="input"
      @keydown.enter="addTask"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoListHeader',
  // props: ['add'],
  data () {
    return {
      placeholderText: '请输入你的任务名称,按回车键确认'
    }
  },
  methods: {
    addTask (e) {
      const value = e.target.value.trim()
      if (!value) return
      this.$emit('add', value)
      e.target.value = ''
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  margin: 10px 0;
  .input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
  }
}
</style>
