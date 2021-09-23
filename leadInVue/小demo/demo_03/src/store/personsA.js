// 引入 id
import { nanoid } from 'nanoid'
export default {
  namespaced: true, //开启命名空间
  actions: {
    // 添加一个人
    addPerson (context, value) {
      if (!value.trim()) return
      const obj = {
        id: nanoid(),
        name: value
      }
      context.commit('ADD_PERSON', obj)
    },
    // 删除一个人
    deletePerson (context) {
      context.commit('DELETE_PERSON')
    }
  },
  mutations: {
    ADD_PERSON (state, value) {
      state.persons.unshift(value)
      state.personsSum = state.persons.length
    },
    DELETE_PERSON (state) {
      state.persons.splice(state.persons.length - 1, 1)
      state.personsSum = state.persons.length
    }
  },
  getters: {
    personsBigSum (state) {
      return state.personsSum * 10
    }
    // ES6简写形式
    // personsBigSum:state=>state.personsSum * 10
  },
  state: {
    persons: [
      {
        id: '001',
        name: '小红'
      }
    ],
    personsSum: 1,
    address: '深圳'
  }
}
