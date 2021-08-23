<template>
  <div class="todoListCase">
    <TodoListHeader :add="addTask"></TodoListHeader>
    <TodoListContent
      :todos="todos"
      :isCheck="isCheck"
      :deleteItem="deleteItem"
    ></TodoListContent>
    <TodoListFooter
      :todos="todos"
      :setIsAll="setIsAll"
      :clearItem="clearItem"
    ></TodoListFooter>
  </div>
</template>

<script>
import TodoListHeader from './TodoListHeader.vue'
import TodoListContent from './TodoListContent.vue'
import TodoListFooter from './TodoListFooter.vue'
import { nanoid } from 'nanoid'
export default {
  name: 'TodoListCase',
  components: {
    TodoListHeader,
    TodoListContent,
    TodoListFooter
  },
  watch: {
    todos: {
      // 深度监听数组中的元素发生改变
      deep: true,
      handler (value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加任务
    addTask (n) {
      // 调用nanoid前端库生成随机Id
      const taskItem = {
        id: nanoid(),
        taskName: n,
        done: false
      }
      this.todos.unshift(taskItem)
    },
    // 勾选任务
    isCheck (id) {
      this.todos.forEach(item => {
        if (item.id === id) {
          item.done = !item.done
        }
      })
    },
    // 删除任务
    deleteItem (id) {
      this.todos = this.todos.filter(item => {
        return item.id !== id
      })
    },
    // 全勾选或者不勾选
    setIsAll (value) {
      this.todos.forEach(item => {
        item.done = value
      })
    },
    // 清除已完成的任务
    clearItem () {
      this.todos = this.todos.filter(item => !item.done)
    }
  }
}
</script>

<style lang="less" scoped>
.todoListCase {
  // height: 400px;
  width: 700px;
  //   background-color: red;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 50px;
  padding: 20px;
}
</style>
