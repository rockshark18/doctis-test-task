<template>
  <div class="container dbg">
    <div class="col col-1 dbg">
      <div class="dbgr">11111</div>
      <div class="">22222</div>
    </div>

    <!-- TODO: implement, remove hardcode -->
    <div class="col col-2 ndbg">
      <div class="b-totals ndbgr">
        <div class="b-totals__title">Cart Totals</div>
        <div class="total-block">
          <div class="total-block__row">
            <div class="total-block__text">Subtotal</div>
            <div class="total-block__value-secondary">123</div>
          </div>
          <div class="total-block__row">
            <div class="total-block__text">Shipping</div>
            <div class="total-block__value-secondary">12</div>
          </div>
          <div class="total-block__row">
            <div class="total-block__text">Total</div>
            <div class="total-block__value-primary">123456</div>
          </div>
            <div class="total-block__button" @click="console.log('@CLICK: check out ')">Check Out</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	// models
	import cartModel from '@/models/cartModel';

	// TODO: implement logic
	export default {
		components: {
		},
		data() {
			return {
      }
		},
		mounted() {
		},
		watch: {
		},
		methods: {
		},
	}
</script>

<style lang="scss" scoped>
  .container {
    width: 1440px;
    min-height: 525px;

    display: flex;
    padding: 67px 100px;

    .col {
      padding: 0;

      min-height: 390px;

      &-1 {
        width: 68.3%;
        padding-right: 30px;
      }

      &-2 {
        background-color: #F9F1E7;
        padding: 0 70px;
        width: 31.7%;
      }
    }
  }

  .b-totals{
    width: 100%;
    padding: 0;

    &__title{
      margin-top: 12px;

      font-family: $primary-font;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;

      text-align: center;

      color: $default-color;
    }

    .total-block{
      margin-top: 50px;

      &__row{
        display: flex;
        justify-content: space-between;
        align-items: center; // center V
        margin-bottom: 20px;
      }
      &__text{
        font-family: $primary-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: $default-color;
      }
      &__value-secondary{
        font-family: $primary-font;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #9f9f9f;
      }
      &__value-primary{
        font-family: $primary-font;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: $accent-color;
      }
      &__button{
        margin-top: 40px;

        cursor: pointer;
        text-align: center;
        height: 58.95px;
        display: flex;
        justify-content: center;
        align-items: center;


        font-family: $primary-font;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: $default-color;

        border: 1px solid $default-color;
        border-radius: 15px;
      }
    }
  }
</style>
