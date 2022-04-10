<template>
  <!-- Wrap in links to make them accessible without a bunch of scripting, aria, tab indexing -->
  <RouterLink :to="service.id">
    <KCard class="service-card">
      <template #title>
        <span class="service-name truncate" :title="service.name">
          {{ service.name }}
        </span>
      </template>
      <template #body>
        <!-- Black-45 is to spec, but probably doesn't meet WCAG AA contrast standards -->
        <p class="type-sm color-black-45">
          {{ service.description | truncate(100) }}
        </p>
        <div class="d-flex align-items-center">
          <KBadge>
            {{ service.versions.length }}
          </KBadge>
          <span class="type-sm ml-2 bold-500 color-black-70">Versions</span>
        </div>
      </template>
    </KCard>
  </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue'
import KBadge from '@kongponents/kbadge'
import KCard from '@kongponents/kcard'

import { Service } from '@/store'
import { truncate } from '@/views/catalog/components/utils'

export default Vue.extend({
  name: 'ServiceCard',
  components: {
    KBadge,
    KCard
  },
  // Pure CSS ways all end up looking jank, went with a filter
  filters: {
    truncate
  },
  props: {
    service: {
      type: Service,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../sass/utils';

$cardWidth: 215px;
/* This bothers me */
$maxTextWidth: $cardWidth - 26;

a {
  @include empty-anchor;

  display: block;
  margin: 0 10px 20px;
  width: 100%;

  &:hover,
  &:focus {
    --KCardBorder: 1px solid var(--blue-400);
    outline: none;
  }

  @include breakup(sm) {
    width: $cardWidth;
  }
}

.service-card {
  height: 100%;
}

.service-name {
  color: var(--blue-500);
  display: block;

  @include breakup(sm) {
    width: $maxTextWidth;
  }
}

p {
  height: 64px;
  line-height: 1.1;
  margin-top: 0;
  overflow: hidden;

  @include breakup(sm) {
    width: $maxTextWidth;
  }
}
</style>
