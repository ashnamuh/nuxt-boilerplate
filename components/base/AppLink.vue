<template>
  <a
    v-if="isNewWindow"
    :class="[className]"
    :href="path"
    target="_blank"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :class="[className]"
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
    },
    className: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
</style>
