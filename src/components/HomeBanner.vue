<template>
  <div class="banner__body ndbg">
    <div class="subframe ndbg">
      <div class="subframe__tag">New Arrival</div>
      <div class="subframe__title">
          Discover Our &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Collection <!-- NOTE: 2024/10/18 trick to carry text on new line -->
      </div>
      <div class="subframe__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
      <button class="subframe__button">buy now</button>
    </div>
  </div>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
  .banner {
    &__body {
      width: 1440px;
      height: 718px;
      background-image: url('@/assets/images/components/HomeBanner/background.jpg')
    }
  }

  .subframe {
    position: relative;

    left: 739px;
    top: 153px;
    width: 643px;
    height: 443px;

    border-radius: 10px;

    background-color: #fff3e3;

    padding: 60px 45px 45px 45px;

    &__tag {
      font-family: $primary-font;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 3px;

      color: $primary-color;
    }

    &__title{
      font-family: $primary-font;
        font-weight: 700;
        font-size: 52px;
        line-height: 65px;

        color: $accent-color;
    }

    &__text {
      margin-top: 15px;

      font-family: $primary-font;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      color: $primary-color;
    }

    &__button{
      width: 222px;
      height: 74px;

      margin-top: 45px;

      background-color: $accent-color;
      color: #fff;

      font-family: $primary-font;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      text-transform: uppercase;

      display: flex;
      justify-content: center; // center H
      align-items: center;     // center V
    }
  }
</style>
