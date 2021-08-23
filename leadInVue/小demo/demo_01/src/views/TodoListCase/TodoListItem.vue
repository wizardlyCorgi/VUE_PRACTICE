<template>
  <div class="item">
    <div class="checkBox">
      <label style="cursor: pointer;">
        <input
          type="checkbox"
          :checked="todoItm.done"
          @change="isChecked(todoItm.id)"
        />
        <span>{{ todoItm.taskName }}</span>
      </label>
    </div>
    <div class="deleteBtn button" @click="deleteTask(todoItm.id)">
      删除
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todoItm', 'isCheck', 'deleteItem'],
  created () {},
  methods: {
    isChecked (id) {
      this.isCheck(id)
    },
    deleteTask (id) {
      if (confirm('你确定要删除吗?')) {
        this.deleteItem(id)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #666;
  }
  &:hover .button {
    display: block;
  }
  .checkBox {
    margin-left: 20px;
  }
  .deleteBtn {
    display: none;
    margin-right: 20px;
    height: 30px;
    line-height: 30px;
    background-color: #df5944;
    padding: 0 20px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    &:hover {
      display: block;
    }
  }
}
</style>
