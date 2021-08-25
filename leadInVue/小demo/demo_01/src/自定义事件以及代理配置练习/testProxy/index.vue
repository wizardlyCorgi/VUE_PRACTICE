<template>
  <div class="test">
    <button @click="getStuents">获取学生信息</button> <br />
    <button @click="getCars">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'testProxy',
  methods: {
    getStuents () {
      axios
        .get('http://localhost:8081/api/students')
        .then(
          res => {
            console.log(res.data)
          },
          err => {
            console.log(err.message)
          }
        )
        .catch(err => {
          console.log(err)
        })
    },
    getCars () {
      axios
        .get('http://localhost:8081/carApi/cars')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
