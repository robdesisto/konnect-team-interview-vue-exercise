import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'
import { Actions, Mutations, Service, State } from '@/store/types'

// Export types
export { Actions, Mutations, Service }

Vue.use(Vuex)

/* Should really be a module state but the whole application hierarchy is "up" a level for brevity */
export const state: State = { // export for testing
  error: false,
  loading: true,
  page: 1,
  query: '',
  services: []
}

// Decompose the options into individual functions for easy testing
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
