import { expect } from 'chai'

// This should be aliased, but apparently I need to do more than just add a path alias to the TSConfig?
import { ServicesTesting } from '../../../tests/utils/ServicesTesting'

import { filtered } from '@/store/getters'
import { Service, state as initialState } from '../index'
import { State } from '@/store/types'

const serviceUtils = new ServicesTesting()

describe('filtered', () => {
  let state: State
  let services: Service[]

  beforeEach(() => {
    services = serviceUtils.services()
    state = Object.assign({}, initialState)
  })

  it('should return an empty array by default', () => {
    expect(filtered(state)).to.eql([])
  })

  it('should return an empty array when there is no services', () => {
    state.query = 'Hand'
    expect(filtered(state)).to.eql([])
  })

  it('should return all services when there is no query', () => {
    state.services = services
    expect(filtered(state).length).to.eq(services.length)
  })

  it('should return matching services when there is a query', () => {
    state.query = 'hand'
    state.services = services
    expect(filtered(state).length).to.eq(5)
  })
})
