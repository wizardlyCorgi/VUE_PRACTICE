<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Father></Father> -->
    <!-- <RouterTest></RouterTest> -->
    <Test1></Test1>
    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
        city
      }}</el-checkbox-button>
    </el-checkbox-group> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Father from './views/VuexPactice/Father.vue'
// import RouterTest from './views/RouterTest'
import Test1 from './views/test1.vue'
import { getListAPI } from './services/api'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // RouterTest
    Test1
  },
  created () {
    // this.mockData()
    // this.mockApiData()
  },
  mounted () {
    this.mockApiData()
  },
  data () {
    return {
      checkList: '',
      checkboxGroup1: ['上海'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  methods: {
    mockData () {
      // console.log(data2)
      // console.log(data)
      // 输出结果
      // console.log(JSON.stringify(data, null, 4))
    },
    mockApiData () {
      getListAPI()
        .then(res => {
          console.log(res, 'res')
        })
        .catch(err => {
          console.log(err)
        })
      // axios
      //   .get('http://localhost:8081/mockApi/mode2/DataOne')
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
