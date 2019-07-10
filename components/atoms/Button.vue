<template>
  <button
    :disabled="disabled"
    :class="[
      'button-' + type,
      size ? 'button-' + type + '--' + size : '',
      {
        'is-round': round,
        'is-disabled': disabled,
        'is-plain': plain
      }
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
    @at-root &.is-round {
      border-radius: 20px;
    }
    @at-root &.is-plain {
      background-color: mix($white, $color, 90%);
      @if ($color!=$white) {
        color: $color;
        border-color: $color;
      }
    }
    @at-root &.is-disabled {
      background-color: mix($white, $color, 50%);
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

$color-default: #ffffff;
$color-primary: #409eff;
$color-success: #67c23a;
$color-info: #909399;
$color-warning: #e6a23c;
$color-danger: #f56c6c;

@include button(default, $color-default);
@include button(primary, $color-primary);
@include button(success, $color-success);
@include button(info, $color-info);
@include button(warning, $color-warning);
@include button(danger, $color-danger);
</style>
