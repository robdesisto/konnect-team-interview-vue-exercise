<template>
  <Layout :title="service ? service.name : 'Not Found'">
    <template #actions>
      <KButton size="small" :is-rounded="false" @click="$router.push('/')">
        Done
      </KButton>
    </template>
    <template #default>
      <!-- Error -->
      <KEmptyState v-if="!service" :cta-is-hidden="true" :is-error="true">
        <template #message>
          <h3>The service you are looking for does not exist</h3>
        </template>
      </KEmptyState>
      <dl>
        <dt>Name</dt>
        <dd>{{ service.name }}</dd>
        <dt>Description</dt>
        <dd>{{ service.description }}</dd>
        <dt>Versions</dt>
        <dd>
          <ul>
            <li v-for="v in service.versions" :key="v.id">
              <strong>{{ v.name }}</strong>
              {{ v.description }}
            </li>
          </ul>
        </dd>
      </dl>
    </template>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

import KButton from '@kongponents/kbutton'
import KEmptyState from '@kongponents/kemptystate'

import Layout from '@/components/Layout.vue'
import { Service } from '@/store'

export default Vue.extend({
  name: 'ServiceDetail',
  components: {
    KButton,
    KEmptyState,
    Layout
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    service (): Service | undefined {
      return this.$store.state.services.find(s => s.id === this.$props.id)
    }
  }
})
</script>

<style lang="scss" scoped>
dl {
  margin: 10px;

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0 0 1rem;
  }
}

li {
  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
}
</style>
