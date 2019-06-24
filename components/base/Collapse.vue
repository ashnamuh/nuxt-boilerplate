<template>
  <div>
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
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      console.log('asdf')
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
@mixin font-normal {
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -2px;
}

$w1220: 1220px;
$w760: 760px;
$w910: 910px;
$w360: 360px;

.footer {
  background-color: #161c1d;
  padding: 60px 48px;
  @media screen and (max-width: $w1220) and (min-width: $w760) {
    padding: 48px;
  }
  @media screen and (max-width: $w760) {
    padding: 32px 24px;
  }
  &__container {
    height: 48px;
    margin: 0 auto;
    max-width: 1792px;
    @media screen and (max-width: $w1220) and (min-width: $w910) {
      height: 68px;
    }
    @media screen and (max-width: $w910) and (min-width: $w760) {
      height: 120px;
    }
    @media screen and (max-width: $w760) {
      height: 200px;
    }
    @media screen and (max-width: $w360) {
      height: 230px;
    }
  }
  &__homeLink {
    float: left;
    width: 202px;
    @media screen and (max-width: $w760) {
      float: none;
      width: 312px;
    }
    &__text {
      display: block;
      color: #ffffff;
      opacity: 0.9;
      @include font-normal;
      margin-top: 4px;
    }
  }
  &__mainInfo {
    float: left;
    margin-left: 84px;
    margin-top: 4px;
    @media screen and (max-width: $w760) {
      float: none;
      margin-top: 40px;
      margin-left: 0px;
    }
  }
  &__externalInfo {
    float: right;
    @media screen and (max-width: $w910) and (min-width: $w760) {
      margin-right: 184px;
      margin-top: 22px;
    }
    @media screen and (max-width: $w760) {
      float: none;
      margin-top: 18px;
    }
  }
}

.mainInfo {
  &__contact {
    float: left;
    color: #cdea12;
    &:after {
      content: '|';
      color: #bcc0c6;
      margin-left: 15px;
      margin-right: 16px;
    }
  }
  &__company {
    margin-top: 12px;
  }
}

.servicesList {
  color: #bcc0c6;
  overflow: hidden;
  &__item {
    float: left;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}

.company {
  .enterForReact {
    display: none;
    @media screen and (max-width: $w1220) {
      display: inline;
    }
  }
  &__address {
    float: left;
    color: #bcc0c6;
    @include font-normal;
    @media screen and (max-width: $w760) {
      font-size: 12px;
    }
  }
  &__contact {
    float: left;
    color: #bcc0c6;
    font-size: 14px;
    @include font-normal;
    @media screen and (max-width: $w760) {
      font-size: 12px;
    }
  }
  &__copyright {
    float: left;
    color: #bcc0c6;
    @include font-normal;
    @media screen and (max-width: $w760) {
      float: none;
      font-size: 12px;
    }
  }
}

.externalInfo {
  &__linksList {
    &__item {
      float: left;
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
}
</style>
