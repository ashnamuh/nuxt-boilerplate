<template>
  <button :style="buttonStyle" :class="[className]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    width: {
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    className: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
    buttonStyle() {
      const { width, height } = this
      return {
        width: width + 'px',
        height: height + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
button {
  font-size: 14px;
  line-height: 1.71;
}
</style>
