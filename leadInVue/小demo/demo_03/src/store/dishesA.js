// 引入 id
import { nanoid } from 'nanoid'
export default {
  namespaced: true, //开启命名空间
  actions: {
    // 添加一个菜
    addDishes (context, value) {
      const obj = {
        id: nanoid(),
        name: value
      }
      context.commit('ADD_DISHES', obj)
    }
  },
  mutations: {
    ADD_DISHES (state, value) {
      state.dishes.unshift(value)
      state.dishesSum = state.dishes.length
    },
    DELETE_DISHES (state) {
      state.dishes.splice(state.dishes.length - 1, 1)
      state.dishesSum = state.dishes.length
    }
  },
  getters: {
    dishesBigSum (state) {
      return state.dishesSum * 10
    }
  },
  state: {
    dishes: [
      {
        id: '001',
        name: '玛卡巴卡红烧肉'
      }
    ],
    dishesSum: 1
  }
}
