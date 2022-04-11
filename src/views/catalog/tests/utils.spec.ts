import { expect } from 'chai'

import { getBoundaries } from '@/views/catalog/utils'

describe('getBoundaries', () => {
  it('should return the start and end slice indexes', () => {
    expect(getBoundaries(1, 10)).to.eql([0, 10])
    expect(getBoundaries(2, 10)).to.eql([10, 20])
  })
})
