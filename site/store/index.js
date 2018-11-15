import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      grid: false
    }),
    mutations: {
      toggleGrid (state) {
        state.grid = !state.grid
      }
    }
  })
}

export default createStore