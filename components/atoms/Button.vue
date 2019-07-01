<template>
  <button
    :disabled="disabled"
    :class="[
      'button-' + type,
      size ? 'button-' + type + '--' + size : '',
      plain ? 'button-' + type + '--' + 'plain' : '',
      disabled ? 'button-' + type + '--' + 'disabled' : '',
      round ? 'button-' + type + '--' + 'round' : ''
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'default',
      validator(x) {
        const validTypes = [
          'default', 'primary', 'success',
          'info', 'warning', 'danger'
        ]
        return validTypes.indexOf(x) !== -1
      }
    },
    size: {
      type: String,
      required: false,
      default: undefined,
      validator(x) {
        const validSizes = [
          'default', 'medium', 'small'
        ]
        return validSizes.indexOf(x) !== -1
      }
    },
    plain: {
      type: Boolean,
      required: false,
      default: false
    },
    round: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
$white: #ffffff;
$black: #000000;

@mixin button($type, $color) {
  $buttonClass: 'button-' + $type;

  .#{$buttonClass} {
    background-color: $color;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 14px;
    @if ($color!=$white) {
      color: $white;
    }
    &--disabled {
      background-color: mix($white, $color, 50%);
    }
    &--round {
      border-radius: 20px;
    }
    &--plain {
      background-color: mix($white, $color, 90%);
      @if ($color!=$white) {
        color: $color;
        border-color: $color;
      }
    }
    &--medium {
      font-size: 14px;
      padding: 10px 20px;
    }
    &--small {
      font-size: 12px;
      padding: 9px 15px;
    }
  }
}

@include button(default, #ffffff);
@include button(primary, #409eff);
@include button(success, #67c23a);
@include button(info, #909399);
@include button(warning, #e6a23c);
@include button(danger, #f56c6c);
</style>
