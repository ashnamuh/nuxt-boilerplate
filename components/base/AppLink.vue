<template>
  <a
    v-if="isNewWindow"
    :href="path"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :active-class="activeClassName"
    :to="path"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    activeClassName: {
      type: String,
      required: false,
      default: undefined
    },
    path: {
      type: String,
      required: true
    },
    isNewWindow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
  }
}
</script>
