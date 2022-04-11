import { expect } from 'chai'

import { ServicesTesting } from '../../../tests/utils/ServicesTesting'

import { state as initialState } from '../index'
import { State } from '@/store/types'

import { error, loading, page, query, services } from '@/store/mutations'

const serviceUtils = new ServicesTesting()

describe('mutations', () => {
  let state: State

  beforeEach(() => {
    state = Object.assign({}, initialState)
  })

  describe('error', () => {
    it('should mutate the error state', () => {
      expect(state.error).to.eq(initialState.error)

      const mutation = true

      error(state, mutation)
      expect(state.error).to.eq(mutation)
    })
  })

  describe('loading', () => {
    it('should mutate the loading state', () => {
      expect(state.loading).to.eq(initialState.loading)

      const mutation = false

      loading(state, mutation)
      expect(state.error).to.eq(mutation)
    })
  })

  describe('page', () => {
    it('should mutate the page state', () => {
      expect(state.page).to.eq(initialState.page)

      const mutation = 2

      page(state, mutation)
      expect(state.page).to.eq(mutation)
    })
  })

  describe('query', () => {
    it('should mutate the query state', () => {
      expect(state.query).to.eq(initialState.query)

      const mutation = 'abc'

      query(state, mutation)
      expect(state.query).to.eq(mutation)
    })
  })

  describe('services', () => {
    it('should mutate the services state', () => {
      expect(state.services).to.eq(initialState.services)

      const mutation = serviceUtils.services()

      services(state, mutation)
      expect(state.services).to.eq(mutation)
    })
  })
})
