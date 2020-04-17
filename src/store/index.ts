import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    greeting: ''
  },

  mutations: {
    setGreeting (state, greeting) {
      state.greeting = greeting
    }
  }
})

export function useStore () {
  return store
}

export default store
