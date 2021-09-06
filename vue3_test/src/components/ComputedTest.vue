<template>
  <div>
    姓: <input type="text" v-model="person.firstName" /> <br />
    名: <input type="text" v-model="person.lastName" /><br />
    <!-- 全名: {{ fullName }} -->
    全名: <input type="text" v-model="person.fullName" />
  </div>
  <ul>
    <li
      class="listItem"
      v-for="item in list"
      :key="item.id"
      :class="item.bgBleoon ? 'bgColor' : ''"
      @mouseenter="mouseEnter(item)"
      @mouseout="mouseOut(item)"
    >
      {{ item.content }}
    </li>
  </ul>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Test3',
  setup () {
    // 数据
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    let list = reactive([
      {
        id: '001',
        content: 'bbb',
        bgBleoon: false
      },
      {
        id: '002',
        content: 'aaa',
        bgBleoon: false
      },
      {
        id: '003',
        content: 'ddd',
        bgBleoon: false
      },
      {
        id: '004',
        content: 'ccc',
        bgBleoon: false
      }
    ])

    // 回调方法
    function mouseEnter (item) {
      console.log(111)
      item.bgBleoon = true
    }
    function mouseOut (item) {
      console.log(222)
      item.bgBleoon = false
    }
    // 计算属性
    // 简写形式(是一个函数)
    // let fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })
    // 完整写法(对象配置)
    person.fullName = computed({
      get () {
        return person.firstName + '-' + person.lastName
      },
      set (newVal) {
        let val = newVal.split('-')
        person.firstName = val[0]
        person.lastName = val[1]
      }
    })
    return {
      // fullName,
      person,
      list,
      // isBgColor,
      mouseEnter,
      mouseOut
    }
  }
}
</script>

<style>
.listItem {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  margin-bottom: 10px;
}
.bgColor {
  background-color: red;
}
</style>
