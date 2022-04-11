<template>
  <!--
  Making some pretty big assumptions about how common this layout is through the app and how
  standard the various aspects of it are. But assuming that there are standard layouts for feature
  sections, it makes sense to abstract them to keeping things like spacing and header hierarchy
  consistent.
  -->
  <div>
    <header class="mb-5">
      <div class="d-flex align-items-center justify-content-between">
        <!--
        The mock size is 24px which isn't in the Kong Styles typography spec or headers. Just going
        with the closest one. IRL I would push back on design to either specify 22px or make 24 the
        standard.
        -->
        <h1 class="ma-0 pa-0 type-xl color-blue-700">
          {{ title }}
        </h1>
        <div>
          <slot name="actions" />
        </div>
      </div>
      <div class="filters">
        <slot name="filters" />
      </div>
    </header>
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Layout',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  padding: 0 10px;
}

.filters:not(:empty) {
  margin-top: 24px;
}
</style>
