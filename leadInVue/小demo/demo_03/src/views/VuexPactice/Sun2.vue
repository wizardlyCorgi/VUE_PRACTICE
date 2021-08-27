<template>
  <div class="son2">
    <h1>晚餐菜单统计</h1>
    <h1>地点: {{ address }}</h1>
    <h2>菜名计数:{{ dishesSum }}</h2>
    <h2>菜名计数:{{ dishesBigSum }}</h2>
    <input type="text" v-model="name" />
    <button @click="addDishe">请添加一个菜</button>
    <button @click="delteDishe">减少一个菜</button>
    <br />
    <ul>
      <li v-for="p in dishes" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sun2',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addDishe () {
      if (!this.name.trim()) return
      this.$store.dispatch('dishesA/addDishes', this.name)
      this.name = ''
    },
    delteDishe () {
      this.$store.commit('dishesA/DELETE_DISHES')
    }
  },
  computed: {
    // 最普通的写法
    dishes () {
      return this.$store.state.dishesA.dishes
    },
    address () {
      return this.$store.state.personsA.address
    },
    dishesSum () {
      return this.$store.state.dishesA.dishesSum
    },
    dishesBigSum () {
      return this.$store.getters['dishesA/dishesBigSum']
    }
  }
}
</script>

<style></style>
