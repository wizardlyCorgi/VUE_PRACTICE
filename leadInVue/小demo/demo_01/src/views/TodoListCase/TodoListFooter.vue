<template>
  <div class="footer" v-show="total">
    <div class="checkBox">
      <input type="checkbox" v-model="isAll" />
      <span>已完成 {{ doneTotal }}</span
      >/ <span>全部 {{ total }}</span>
    </div>
    <div class="btn" @click="clearTask">
      清除已完成任务
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListFooter',
  props: ['todos', 'setIsAll', 'clearItem'],
  computed: {
    doneTotal () {
      // reduce 第一个参数是一个回调函数,第二个参数是统计的初始值
      // reduce的回调函数的第一个参数是上一次统计的值,第二个参数是每一项item
      // 回调函数返回统计的结果作为下一次调用的pre的值
      // let num = this.todos.reduce((pre, todo) => {
      //   return pre + (todo.done ? 1 : 0)
      // }, 0)
      // return num
      // 简写,省略return以及花括号
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    total () {
      return this.todos.length
    },
    isAll: {
      get () {
        return this.doneTotal === this.total
      },
      set (value) {
        // 把数据中的done全部赋值
        this.setIsAll(value)
      }
    }
  },
  methods: {
    clearTask () {
      this.clearItem()
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .btn {
    // margin-right: 20px;
    height: 30px;
    line-height: 30px;
    background-color: #df5944;
    // width: 50px;
    padding: 0 20px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
