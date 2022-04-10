import axios from 'axios'
import { ActionContext } from 'vuex'

import { Mutations, Service, State } from '@/store/types'

export async function fetchServices ({ commit }: ActionContext<State, State>) {
  try {
    const res = await axios.get('/api/service_packages')

    commit(Mutations.SERVICES, res.data.map(s => new Service(s)))
  } catch {
    // no real reason to care about what the error is for this exercise
    commit(Mutations.ERROR, true)
  } finally {
    commit(Mutations.LOADING, false)
  }
}
