<template>
  <div class="container">
    <div class="col col-1">
      <div class="b1__title">Funiro.</div>
      <div class="b1__item mt">400 University Drive Suite 200 Coral Gables,</div>
      <div class="b1__item">FL 33134 USA.</div>
    </div>
    <div class="col col-2">
      <div class="b-common__title">Links</div>
      <div class="b-common__item mt">Home</div>
      <div class="b-common__item mt">Shop</div>
      <div class="b-common__item mt">About</div>
      <div class="b-common__item mt">Contact</div>
    </div>
    <div class="col col-3">
      <div class="b-common__title">Help</div>
      <div class="b-common__item mt">Payment Options</div>
      <div class="b-common__item mt">Returns</div>
      <div class="b-common__item mt">Privacy Policies</div>
    </div>
    <div class="col col-4">
      <div class="b4__title">Newsletter</div>
      <div class="b4__subscribe-block mt">
        <div class="b4__input">Enter Your Email Address</div>
        <div class="b4__button">subscribe</div>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="copyright__subblock">
      2023 furino. All rights reverved
    </div>
  </div>
</template>

<style lang="scss" scoped>

  // colors
  $grey-color: #9f9f9f;
  // borders
  $horizontal-border: 1px solid rgba(0, 0, 0, .17);
  // margins
  $margin-col-content: 45px;

  .mt {
    margin-top: $margin-col-content;
  }

  .container {
    display: flex;
    width: 100%;

    border-top: $horizontal-border;

    padding: 42.5px 0;
    margin-top: 40px;

    .col {
      padding: 0 50px;

      //border: 1px solid #f00;

      min-height: 200px;

      &-1 {
        width: 37%;
        padding: 0 100px;
      }

      &-2 {
        width: 19%;
      }

      &-3 {
        width: 19%;
      }

      &-4 {
        width: 31%;
        padding-right: 100px;
      }
    }

    /*block(content) for the columns 1,2,3,4*/
    .b1 {
      &__title {
        font-family: $primary-font;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;

        color: $default-color;
      }

      &__item {

        font-family: $primary-font;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: $grey-color;
      }
    }

    .b-common { /*for columns 2,3 */
      &__title {
        font-family: $primary-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: $grey-color;
      }


      &__item {
        font-family: $primary-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: $default-color;
      }
    }

    .b4 {
      &__title {
        font-family: $primary-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: $grey-color;
      }

      &__subscribe-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      // email
      &__input {

        font-family: $primary-font;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;

        color: $grey-color;

        border-bottom: 1px solid #000;
      }

      // subscribe button
      &__button {
        font-family: $primary-font;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;

        color: $default-color;

        border-bottom: 1px solid $default-color;

        text-transform: uppercase;
      }

    }
  }

  .copyright {
    padding: 0 100px;

    &__subblock {
      padding-top: 35px;
      border-top: $horizontal-border;

      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: $default-color;

    }
  }
</style>
