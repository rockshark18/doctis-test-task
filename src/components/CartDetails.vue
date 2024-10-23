<template>
  <div>
    <div v-if="!isCartEmpty" class="container ndbg">

      <!-- items list -->
      <div class="col col-1 ndbgr">
        <div class="head-row">
          <div class="head-col head-col-1 ndbg"></div>
          <div class="head-col head-col-2 ndbg">
            <div class="head-col__title">Product</div>
          </div>
          <div class="head-col head-col-3 ndbg">
            <div class="head-col__title">Price</div>
          </div>
          <div class="head-col head-col-4 ndbg">
            <div class="head-col__title">Quantity</div>
          </div>
          <div class="head-col head-col-5 ndbg">
            <div class="head-col__title">Subtotal</div>
          </div>
          <div class="head-col head-col-6 ndbg">
            <div class="head-col__title"></div>
          </div>
        </div>

        <!-- list popultation -->
        <cart-details-item
          v-for="i in cartItems"
          :key = "i.id"
          :item="i"
          @delete="onDelete"
          @update-quantity="onQuantityChange"
        >
        </cart-details-item>
      </div>


      <!-- details block -->
      <div class="col col-2 ndbg">
        <div class="b-totals ndbgr">
          <div class="b-totals__title">Cart Totals</div>
          <div class="total-block">
            <div class="total-block__row">
              <div class="total-block__text">Subtotal</div>
              <div class="total-block__value-secondary">{{formatPrice(subtotal)}}</div>
            </div>
            <div class="total-block__row">
              <div class="total-block__text">Shipping</div>
              <div class="total-block__value-secondary">{{formatPrice(shipping)}}</div>
            </div>
            <div class="total-block__row">
              <div class="total-block__text">Total</div>
              <div class="total-block__value-primary">{{formatPrice(total)}}</div>
            </div>
            <div class="total-block__button" @click="console.log('@CLICK: check out ')">Check Out</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container ndbgr">
      <div class="cart-empty ndbg">
        Ваша корзина пустая
        <div class="cart-empty__back-btn" @click="$router.push('/')">
          Назад к покупкам
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  // utility
	import {PriceFormatter} from '@/utility/priceFormatter';
	// models
	import cartModel from '@/models/cartModel';
	// vue components
	import CartDetailsItem from "@/components/CartDetailsItem";


	export default {
		components: {
			CartDetailsItem,
    },
		data() {
			return {
				cartResult:null,
			}
		},
		mounted() {
			this.cartResult = cartModel.getResult();
    },
		computed: {
			isCartEmpty() {
				return this.cartResult === null;
			},
			subtotal() {
				return this.cartResult ? this.cartResult.itemsCost : 0;
			},
			shipping() {
				return this.cartResult ? this.cartResult.shippingCost : 0;
			},
			total() {
				return this.cartResult ? this.cartResult.totalCost : 0;
			},
			cartItems() {
				return cartModel.getItems().map(item => ({
					id: item.product.id,
					img: item.product.image,
					name: item.product.name,
					price: item.product._finalPrice,
					quantity: item.quantity,
					subtotal: item.product._finalPrice * item.quantity,
				  }));
				},
		},
		methods: {
			formatPrice(price) {
				return PriceFormatter.format(price);
			},
			// event handling
			onQuantityChange({ id, quantity }) {
				cartModel.setQuantity(id, quantity); // update model
				this.cartResult = cartModel.getResult(); // important, update result
			},
      onDelete(cartItem){
				// sending up
				this.$emit('delete', cartItem)
			}
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
        max-height: 390px;
      }
    }

    .head-row {
      display: flex; // important

      height: 55px;
      background-color: #F9F1E7;

      .head-col {
        padding: 0 0;
        display: flex; // important
        align-items: center; // center V
        justify-content: center;

        &-1 {
          width: $cart-details-col-width-img;
        }

        &-2 {
          width: $cart-details-col-width-name;
        }

        &-3 {
          width: $cart-details-col-width-price;
        }

        &-4 {
          width: $cart-details-col-width-quantity;
        }

        &-5 {
          width: $cart-details-col-width-subtotal;
        }

        &-6 {
          width: $cart-details-col-width-delete;
        }

        &__title {
          font-family: $primary-font;
          font-weight: 500;
          font-size: 16px;
          line-height: 14px;

          text-align: center;

          color: $default-color;
        }
      }
    }

    .cart-empty {
      display: block;
      width: 100%;

      font-family: $primary-font, sans-serif; // NOTE: WTF $primary-font is not applied ???
      font-weight: 600;
      font-size: 28px;
      line-height: 48px;

      text-align: center;

      color: $primary-color;

      &__back-btn {
        cursor: pointer;
        font-size: 20px;
        text-decoration: underline;
        color: #777;
      }
    }
  }

  .b-totals {
    width: 100%;
    padding: 0;

    &__title {
      margin-top: 12px;

      font-family: $primary-font;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;

      text-align: center;

      color: $default-color;
    }

    .total-block {
      margin-top: 50px;

      &__row {
        display: flex;
        justify-content: space-between;
        align-items: center; // center V
        margin-bottom: 20px;
      }

      &__text {
        font-family: $primary-font;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: $default-color;
      }

      &__value-secondary {
        font-family: $primary-font;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: #9f9f9f;
      }

      &__value-primary {
        font-family: $primary-font;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: $accent-color;
      }

      &__button {
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
