<template>
  <!-- Could be in the layout component but IRL this would be used in more contexts -->
  <KIcon class="spinner" icon="spinner" size="100" />
</template>

<script lang="ts">
import Vue from 'vue'

import KIcon from '@kongponents/kicon'

export default Vue.extend({
  name: 'Loading',
  components: {
    KIcon
  }
})
</script>

<style lang="scss" scoped>
  .spinner {
    left: 50%;
    margin: -50px 0 0 -50px;
    position: fixed;
    top: 50%;
    z-index: 10;
  }
</style>
