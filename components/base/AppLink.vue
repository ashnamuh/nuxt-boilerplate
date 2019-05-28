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
    :class="[className, (isActive) ? activeClassName : undefined]"
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
    isActive() {
      if (this.$route.path === this.path) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
