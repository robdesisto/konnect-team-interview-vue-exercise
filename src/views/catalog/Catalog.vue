<template>
  <Layout title="Services">
    <template #actions>
      <KButton appearance="primary" size="small" :is-rounded="false" @click="$router.push('new')">
        Add New Service
      </KButton>
    </template>
    <template #filters>
      <KInput v-model="query" type="search" placeholder="Search" />
    </template>
    <template #default>
      <!-- No services -->
      <KEmptyState v-if="services.length === 0" cta-is-hidden>
        <template #title>
          No Services
        </template>
        <template #message>
          <router-link to="new">Add a Service</router-link>
          to begin proxying traffic
        </template>
      </KEmptyState>
      <!-- Normalcy -->
      <template v-else>
        <div class="catalog">
          <ServiceCard v-for="s in visible" :key="s.id" :service="s" />
        </div>
        <Pagination
          :total="filtered.length"
          :page="page"
          :size="max"
          @pageChange="(next) => onPageChange(next)"
        />
      </template>
    </template>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

import KButton from '@kongponents/kbutton'
import KEmptyState from '@kongponents/kemptystate'
import KInput from '@kongponents/kinput'

import Layout from '@/components/Layout.vue'
import { Mutations, Service } from '@/store'
import { getBoundaries } from '@/views/catalog/utils'
import Pagination from '@/views/catalog/components/Pagination.vue'
import ServiceCard from '@/views/catalog/components/ServiceCard.vue'

const max = 12

export default Vue.extend({
  name: 'Catalog',
  components: {
    KButton,
    KEmptyState,
    KInput,
    Layout,
    Pagination,
    ServiceCard
  },
  data () {
    return {
      max,
      query: this.$store.state.query
    }
  },
  computed: {
    // Really only necessary to know the count
    filtered (): Service[] {
      return this.$store.getters.filtered
    },
    page (): number {
      return this.$store.state.page
    },
    // Really only necessary to know if the end user has no services at all
    services (): Service[] {
      return this.$store.state.services
    },
    // What's actually important to display
    visible (): Service[] {
      const items = this.$store.getters.filtered
      const page = this.$store.state.page
      const [start, end] = getBoundaries(page, max)

      return items.slice(start, end)
    }
  },
  watch: {
    /*
    I know I talked about debouncing this, but it would introduce more latency than it would solve
    with such a small data set. Premature optimization and whatnot...
     */
    query (val: string) {
      this.$store.commit(Mutations.QUERY, val)
      this.$store.commit(Mutations.PAGE, 1)
    }
  },
  methods: {
    onPageChange (page: number) {
      this.$store.commit(Mutations.PAGE, page)
    }
  }
})
</script>

<style lang="scss">
.catalog {
  display: flex;
  flex-wrap: wrap;
}
</style>
