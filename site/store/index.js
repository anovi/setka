import Vuex from 'vuex'
import data from '~/assets/data'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      grid: false,
      data: data,
      toc: [],
      tocViewed: null
    }),
    mutations: {
      buildTOC (state, items) {
        state.toc = items
      },
      markTOC (state, items) {
        state.tocViewed = items
      },
      toggleGrid (state) {
        state.grid = !state.grid
      }
    }
  })
}

export default createStore