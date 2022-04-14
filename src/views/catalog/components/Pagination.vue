<template>
  <!--
  The Kong's pagination component didn't look much like the mocks, and seemed to be trying to do
  too much. Besides, I should probably demonstrate the ability to do math or something.
  So I made a much dumber one. IRL this would definitely be a library component, or at the very
  least scoped up to the application's shared components.
  For this exercise we'll pretend it is a one-off for some reason.
  -->
  <div class="d-flex align-items-center justify-content-center mb-4">
    <KButton class="page-btn" :disabled="page === 1" appearance="outline" @click="onPage(page - 1)">
      <template #icon>
        <KIcon icon="arrowLeft" />
      </template>
    </KButton>
    <div class="color-black-45 mx-5">
      <!-- The mockup is zero-based but that seems so programmery, starting with 1 for display purposes -->
      {{ boundaries[0] + 1 }} - {{ boundaries[1] }} of {{ total }}
    </div>
    <KButton class="page-btn" :disabled="page === last" appearance="outline" @click="onPage(page + 1)">
      <template #icon>
        <KIcon icon="arrowRight" />
      </template>
    </KButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import KButton from '@kongponents/kbutton'
import KIcon from '@kongponents/kicon'

import { getBoundaries } from '@/views/catalog/utils'

enum Events {
  'PAGE_CHANGE' = 'pageChange'
}

export default Vue.extend({
  name: 'Pagination',
  components: {
    KButton,
    KIcon
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      default: 15 // Kong's uses 15 as a default, so why not
    }
  },
  computed: {
    boundaries () {
      return getBoundaries(this.$props.page, this.$props.size)
    },
    last () {
      return Math.ceil(this.$props.total / this.$props.size)
    }
  },
  methods: {
    onPage (page: number) {
      this.$emit(Events.PAGE_CHANGE, page)
    }
  }
})
</script>

<style lang="scss">
// The icon-only buttons seemed misaligned, so I went brute force on them
.page-btn {
  --spacing-lg: var(--spacing-sm);
  height: 40px;
  width: 40px;

  svg {
    position: relative;
    left: -2px;
    top: -4px;
  }
}
</style>
