// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 在vue上挂载
Vue.use(Vuex)
// 声明store的配置项
// actions 同步的逻辑在这里处理 dispatch触发
const actions = {
  testFun (context, value) {
    console.log(context, value)
    // 参数一是上下文的意思 包含getter/state 以及一些api commit() dispatch()
    // 参数二是传进来的参数值
    // 一般从这里触发mutations
    context.commit('TEST_FUN', value)
  }
}
// mutations 异步的逻辑在这里处理 commit 触发 一般先触发actions再从actions中去触发mutations
const mutations = {
  TEST_FUN (state, value) {
    console.log(state, value)
    // 参数一state
    // 参数二传进来的参数值
    // 在这里修改state的值
  }
}
// vuex 的计算属性(可通过map函数映射)
const getters = {}
// 变量以及数据的存储(可通过map函数映射)
const state = {}
// 模块化
const modules = {}
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules
})
