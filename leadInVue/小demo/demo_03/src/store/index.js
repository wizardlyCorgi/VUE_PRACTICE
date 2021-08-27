// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 在Vue实例上使用插件
Vue.use(Vuex)
// 使用模块化
import personsA from './personsA'
// const personsA = {
//   namespaced: true, //开启命名空间
//   actions: {
//     // 添加一个人
//     addPerson (context, value) {
//       if (!value.trim()) return
//       const obj = {
//         id: nanoid(),
//         name: value
//       }
//       context.commit('ADD_PERSON', obj)
//     },
//     // 删除一个人
//     deletePerson (context) {
//       context.commit('DELETE_PERSON')
//     }
//   },
//   mutations: {
//     ADD_PERSON (state, value) {
//       state.persons.unshift(value)
//       state.personsSum = state.persons.length
//     },
//     DELETE_PERSON (state) {
//       state.persons.splice(state.persons.length - 1, 1)
//       state.personsSum = state.persons.length
//     }
//   },
//   getters: {
//     personsBigSum (state) {
//       return state.personsSum * 10
//     }
//   },
//   state: {
//     persons: [
//       {
//         id: '001',
//         name: '小红'
//       }
//     ],
//     personsSum: 1,
//     address: '深圳'
//   }
// }
import dishesA from './dishesA'
// const dishesA = {
//   namespaced: true, //开启命名空间
//   actions: {
//     // 添加一个菜
//     addDishes (context, value) {
//       const obj = {
//         id: nanoid(),
//         name: value
//       }
//       context.commit('ADD_DISHES', obj)
//     }
//   },
//   mutations: {
//     ADD_DISHES (state, value) {
//       state.dishes.unshift(value)
//       state.dishesSum = state.dishes.length
//     },
//     DELETE_DISHES (state) {
//       state.dishes.splice(state.dishes.length - 1, 1)
//       state.dishesSum = state.dishes.length
//     }
//   },
//   getters: {
//     dishesBigSum (state) {
//       return state.dishesSum * 10
//     }
//   },
//   state: {
//     dishes: [
//       {
//         id: '001',
//         name: '玛卡巴卡红烧肉'
//       }
//     ],
//     dishesSum: 1
//   }
// }
// const actions = {
//   // 添加一个人
//   addPerson (context, value) {
//     if (!value.trim()) return
//     const obj = {
//       id: nanoid(),
//       name: value
//     }
//     context.commit('ADD_PERSON', obj)
//   },
//   // 删除一个人
//   deletePerson (context) {
//     context.commit('DELETE_PERSON')
//   },
//   // 添加一个菜
//   addDishes (context, value) {
//     const obj = {
//       id: nanoid(),
//       name: value
//     }
//     context.commit('ADD_DISHES', obj)
//   }
// }
// const mutations = {
//   ADD_PERSON (state, value) {
//     state.persons.unshift(value)
//     state.personsSum = state.persons.length
//   },
//   DELETE_PERSON (state) {
//     state.persons.splice(state.persons.length - 1, 1)
//     state.personsSum = state.persons.length
//   },
//   ADD_DISHES (state, value) {
//     state.dishes.unshift(value)
//     state.dishesSum = state.dishes.length
//   },
//   DELETE_DISHES (state) {
//     state.dishes.splice(state.dishes.length - 1, 1)
//     state.dishesSum = state.dishes.length
//   }
// }
// const getters = {
//   personsBigSum (state) {
//     return state.personsSum * 10
//   },
//   dishesBigSum (state) {
//     return state.dishesSum * 10
//   }
// }
// const state = {
//   persons: [
//     {
//       id: '001',
//       name: '小红'
//     }
//   ],
//   personsSum: 1,
//   address: '深圳',
//   dishes: [
//     {
//       id: '001',
//       name: '玛卡巴卡红烧肉'
//     }
//   ],
//   dishesSum: 1
// }
export default new Vuex.Store({
  //   actions,
  //   mutations,
  //   getters,
  //   state
  modules: {
    personsA,
    dishesA
  }
})
