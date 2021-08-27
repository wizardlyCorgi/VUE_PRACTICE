<template>
  <div class="son">
    <h1>徒步人员统计</h1>
    <h1>地点: {{ address }}</h1>
    <h2>人员计数:{{ personsSum }}</h2>
    <h2>人员计数:{{ personsBigSum }}</h2>
    <input type="text" v-model="name" @keyup.enter="addPerson(name)" />
    <button @click="addPerson(name)">请添加一个人员</button>
    <button @click="deltePerson">减少一个人</button>
    <br />
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// vuex中的state的数据映射,帮我们生成compouted中的属性
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Sun',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    // addPerson () {
    //   if (!this.name.trim()) return
    //   this.$store.dispatch('addPerson', this.name)
    //   this.name = ''
    // },
    // 比较简单的逻辑的时候可以简写,但是在方法中要修改页面中不是vuex管理的变量时就不可以
    ...mapActions('personsA', {
      addPerson: 'addPerson'
    }),
    // deltePerson () {
    //   //   this.$store.dispatch('deletePerson')
    //   // 没有业务逻辑的时候直接可以跳过actions调用mutations中的方法
    //   this.$store.commit('DELETE_PERSON')
    // }
    ...mapMutations('personsA', {
      deltePerson: 'DELETE_PERSON'
    })
    // 需要把回调的名字改为跟mutations中的回调一样才可以用数组写法
    // ...mapMutations(['DELETE_PERSON'])
  },
  computed: {
    // 数组写法
    // ...mapState(['address', 'personsSum', 'persons'])
    //对象写法
    ...mapState('personsA', {
      address: 'address',
      personsSum: 'personsSum',
      persons: 'persons'
    }),
    ...mapGetters('personsA', ['personsBigSum'])
  }
}
</script>

<style></style>
