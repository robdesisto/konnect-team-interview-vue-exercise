<template>
  <Layout title="Add New Service">
    <template #actions>
      <KButton size="small" :is-rounded="false" @click="navigateToList()">
        Cancel
      </KButton>
    </template>
    <template #default>
      <form @submit.prevent="showMockSave($event)">
        <KInput v-model="service.name" label="Service Name" placeholder="Service Name" />
        <!-- Heads up, your text areas aren't responsive -->
        <KTextArea
          v-model="service.description"
          label="Service Description"
          placeholder="Service Description"
        />
        <KInput
          v-model="service.versionName"
          label="Initial Version Name"
          placeholder="Initial Version Name"
        />
        <KTextArea
          v-model="service.versionDescription"
          label="Initial Version Description"
          placeholder="Initial Version Description"
        />
        <KButton
          appearance="primary"
          type="submit"
          :is-rounded="false"
        >
          Save
        </KButton>
      </form>
    </template>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import KButton from '@kongponents/kbutton'
import KInput from '@kongponents/kinput'
import KTextArea from '@kongponents/ktextarea'
import { ToastManager } from '@kongponents/ktoaster'

import Layout from '@/components/Layout.vue'
import { Mutations } from '@/store'

/*
Couldn't get the singleton on the Vue prototype working without casting "this" to any.
Seems like I'm missing something, but it also feels like assigning directly to the prototype
instead of using Vue.use is bad?
 */
const toaster = new ToastManager()

export default Vue.extend({
  name: 'NewService',
  components: {
    KButton,
    KInput,
    KTextArea,
    Layout
  },
  data () {
    return {
      service: {
        name: '',
        description: '',
        versionName: '',
        versionDescription: ''
      }
    }
  },
  methods: {
    showMockSave () {
      const opts = {
        appearance: 'success',
        message: `If this is real, I would validate and persist ${this.$data.service.name} while
        optimistically updating the master list. It would also be better to redirect to the newly
        created service, but that would require mocking persistence on the client in some rather
        janky ways.`
      }

      toaster.open(opts)
      /*
      Reset the list view because it would be confusing for users to not see their new service
      in the list
       */
      this.$store.commit(Mutations.QUERY, '')
      this.$store.commit(Mutations.PAGE, 1)
      // Navigate back
      this.navigateToList()
    },
    navigateToList () {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  margin: 0 10px;
}
</style>
