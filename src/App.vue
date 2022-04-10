<template>
  <div id="app">
    <header id="app-header" class="d-flex align-items-center justify-content-between">
      <nav>
        <router-link to="/">
          <img src="./assets/app-logo.svg" alt="Konnect: Home" />
        </router-link>
      </nav>
      <UserMenu />
    </header>
    <!-- Short circuit loading and loading error states so I don't have to deal with them later -->
    <main v-if="!loading" id="app-main">
      <!-- Error -->
      <KEmptyState v-if="error" :cta-is-hidden="true" :is-error="true">
        <template #message>
          <h3>Error Loading Services</h3>
        </template>
      </KEmptyState>
      <!-- Happy path -->
      <router-view v-else />
    </main>
    <!-- Loading -->
    <Loading v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import KEmptyState from '@kongponents/kemptystate'

import Loading from '@/components/Loading.vue'
import UserMenu from '@/components/UserMenu.vue'
import { Actions } from '@/store'

/**
 * For brevity, I'm moving a bunch off application hierarchy up. IRL there'd be a parent "Services" component
 */
export default Vue.extend({
  name: 'App',
  components: {
    KEmptyState,
    Loading,
    UserMenu
  },
  computed: {
    error (): boolean {
      return this.$store.state.error
    },
    loading (): boolean {
      return this.$store.state.loading
    }
  },
  mounted () {
    this.$store.dispatch(Actions.FETCH_SERVICES)
  }
})
</script>

<style lang="scss">
@import './sass/utils';

#app-header {
  background-color: white;
  border-bottom: 1px solid var(--grey-300);
  height: 59px;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;

  /* would have preferred to use the kong spacing utils but they're not responsive */
  @include breakup(sm) {
    padding: 24px;
  }

  a {
    display: block;
  }
}

#app-main {
  margin: 25px auto 0;

  @include breakup(sm) {
    margin-top: 65px;
    max-width: $breakpoint-sm;
  }

  @include breakup(md) {
    max-width: $breakpoint-md;
  }

  @include breakup(lg) {
    max-width: $breakpoint-lg;
  }

}
</style>
