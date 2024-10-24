<template>
  <div class="banner__body ndbg">
    <div class="subframe ndbg">
      <img src="@/assets/images/common/logo.png"/>

      <div class="subframe__title">Cart</div>

      <div class="subframe__breadcrumbs">
        <span class="subframe__breadcrumbs-item-bold">Home</span>
        <img class="subframe__breadcrumbs-item-separator" :src="require('@/assets/images/common/dashcons-arrow-right.svg')"/>
        <span class="subframe__breadcrumbs-item">Cart</span>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    &__body {
      display: flex;
      justify-content: center; // center H
      align-items: center; // center V

      width: 1440px;
      height: 316px;
      background-image: url('@/assets/images/components/CartBanner/background.jpg')
    }
  }

  .subframe {
    text-align: center;

    &__title{
      font-family: $primary-font;
      font-weight: 500;
      font-size: 48px;
      line-height: 72px;

      color: $default-color;
    }

    // NOTE: this is temp, use
    &__breadcrumbs{

      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: $default-color;

      &__item{
        padding-left: 3px;
        padding-right: 3px;
      }
    }

    &__breadcrumbs-item-bold {
      font-weight: 700;
      padding-left: 3px;
      padding-right: 3px;
    }

    &__breadcrumbs-item-separator {
      width: 19px;
      height: 19px;
      margin-top: 2px;
    }

  }
</style>
