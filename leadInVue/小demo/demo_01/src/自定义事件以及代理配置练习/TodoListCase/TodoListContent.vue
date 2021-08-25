<template>
  <div class="content">
    <!-- 我是中间内容 -->
    <TodoListItem v-for="item in todos" :key="item.id" :todoItm="item" />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  name: 'TodoListContent',
  components: {
    TodoListItem
  },
  props: ['todos']
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  // background-color: green;
  border: 1px solid #ccc;
  border-top: 0;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
}
</style>
