<template>
  <div :class="className">
    <button v-for="item in items" :key="item.name" :class="{ selected: item.name === selected }" @click="select(item.name)">
      {{ item.showName }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      require: true,
      default: null,
      validator(items) {
        return items.every(item => item.name && item.showName)
      }
    },
    initialItem: {
      type: String,
      required: false,
      default: null
    },
    className: {
      type: String,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
  },
  created() {
    if (this.initialItem !== null) {
      this.selected = this.initialItem
    }
  },
  methods: {
    select(itemName) {
      this.selected = itemName
      this.$emit('selected', itemName)
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: inline-block;
  border: solid 1px #bcc0c6;
}
button {
  color: #888888;
  line-height: 2.13;
  letter-spacing: -1px;
  font-size: 15px;
  padding-left: 10px;
  &:last-child {
    padding-right: 10px;
  }
  &:not(:last-child)::after {
    content: '|';
    color: #888888;
    margin-left: 10px;
  }
}
.selected {
  color: #cdea12;
}
</style>
