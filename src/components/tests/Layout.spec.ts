import { expect } from 'chai'
import Vue from 'vue'
import { shallowMount, Wrapper } from '@vue/test-utils'

import Layout from '@/components/Layout.vue'

describe('Layout', () => {
  const title = 'My Title'

  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(Layout, { propsData: { title } })
  })

  it('renders the title', () => {
    expect(wrapper.text()).to.include(title)
  })
})
