<template>
  <div :class="className">
    <slot name="button" :active="active" :toggle="toggle">
      default button name
    </slot>
    <div v-show="active">
      <slot name="content">
        <p>default content</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    className: {
      type: String,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
</style>
