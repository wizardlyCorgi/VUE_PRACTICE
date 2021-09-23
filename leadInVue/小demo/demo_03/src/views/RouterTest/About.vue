<template>
  <div class="panel-body">
    <h2 :class="classArr" v-at>我是About的内容</h2>
    <button @click="add">点我添加样式</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this)
  },
  data () {
    return {
      classArr: ['a']
    }
  },
  methods: {
    add () {
      const csTyle = this.classArr.indexOf('c')
      const bsTyle = this.classArr.indexOf('b')
      if (csTyle === -1) {
        this.classArr.push('c')
      }
      if (bsTyle === -1) {
        this.classArr.push('b')
      }
    }
  },
  directives: {
    at: function (element, binding) {
      element.className = 'setClass'
      element.innerText = '哈哈哈'
      console.log(element)
      console.log(binding)
    },
    big: {
      // binding (element, binding) {}
    }
  }
}
</script>
<style>
.a {
  background-color: red;
}
.b {
  border: 1px solid #ccc;
}
.c {
  font-size: 50px !important;
}
.setClass {
  font-size: 50px;
}
</style>
