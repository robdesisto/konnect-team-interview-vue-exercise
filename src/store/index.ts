import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'
import { Actions, Mutations, Service, State } from '@/store/types'

// Export types
export { Actions, Mutations, Service }

Vue.use(Vuex)

/**
 * Should really be a module state but the whole application hierarchy is "up" a level for brevity.
 * By keeping the query and page info in the feature module's state, users can navigate between
 * the list and detail view without losing their place and without resorting to modals.
 * Laving the module would tear down the state so that if the go else where and come back they
 * have a fresh start.
 * */
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
