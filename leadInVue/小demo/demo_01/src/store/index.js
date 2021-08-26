// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 注册vuex
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    sum: 0
  },
  mutations: {
    SUMMATION (state, value) {
      // 第一个参数是state整个对象
      // 第二个参数是commit传进来的值
      state.sum += value
    },
    SUBTRACT (state, value) {
      state.sum -= value
    }
  },
  actions: {
    summation (context, value) {
      // 第一个参数是context 意思为上下文 包含了dispatch以及commit state等东西,便于下一步的操作
      // 第二个参数是调用dispacth传进来的值
      // 调用commit触发mutation中的回调,操作state的数据
      context.commit('SUMMATION', value)
    },
    subtract (context, value) {
      context.commit('SUBTRACT', value)
    }
  },
  modules: {}
})
