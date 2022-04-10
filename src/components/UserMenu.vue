<template>
  <ul class="d-flex align-items-center ma-0 pa-0">
    <!-- These don't do anything for this exercise, making them buttons to be keyboard accessible -->
    <li>
      <!-- https://kongponents.konghq.com/components/icon.html#title icons doesn't seem to work -->
      <button aria-label="Notifications" class="icon-btn">
        <KIcon icon="notificationBell" />
      </button>
    </li>
    <li>
      <button aria-label="Help">
        <KIcon icon="help" />
      </button>
    </li>
    <li>
      <button>
        <img
          src="../assets/user.png"
          alt="User Menu"
        />
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import KIcon from '@kongponents/kicon'

export default Vue.extend({
  name: 'UserMenu',
  components: {
    KIcon
  }
})
</script>

<style lang="scss" scoped>
@import "../sass/utils";

ul {
  list-style-type: none;

  li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}

button {
  @include empty-button;
  border-radius: 100%;
}
</style>
