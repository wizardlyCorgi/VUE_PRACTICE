<template>
  <div class="header">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          v-model="inputValue"
          type="text"
          placeholder="enter the name you search"
          @keyup.enter="getUsers"
        />&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    getUsers () {
      const infoObj = {
        users: [],
        firstEnter: false,
        loading: true,
        errMsg: ''
      }
      this.$bus.$emit('userData', infoObj)
      axios
        .get(`https://api.github.com/search/users?q=${this.inputValue}`)
        .then(res => {
          const infoObj = {
            users: res.data.items,
            loading: false,
            errMsg: ''
          }
          this.$bus.$emit('userData', infoObj)
          this.inputValue = ''
        })
        .catch(err => {
          const infoObj = {
            users: [],
            loading: false,
            errMsg: err.message
          }
          this.$bus.$emit('userData', infoObj)
        })
    }
  }
}
</script>

<style></style>
