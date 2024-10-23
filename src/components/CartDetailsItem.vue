<template>
  <div class="row">
    <div class="col col-1 ndbg">
      <img class="b-img" :src="require('@/assets/images/products/'+item.img)"/>
    </div>
    <div class="col col-2 ndbg">
      <div class="b-text">{{item.name}}</div>
    </div>
    <div class="col col-3 ndbg">
      <div class="b-text">{{formatPrice(item.price)}}</div>
    </div>
    <div class="col col-4 ndbg">
      <input class="b-quantity" type="number" v-model="quantity" :min="minQuantity" :max="maxQuantity" @change="onQuantityChange"/>
    </div>
    <div class="col col-5 ndbg">
      <div class="b-text-black">{{formatPrice(subtotal)}}</div>
    </div>
    <div class="col col-6 ndbg">
      <div @click="onDelete" class="b-btn">
        <img src="@/assets/images/components/CartDetailsItem/trash.png"/>
      </div>
    </div>
  </div>
</template>

<script>
	// utility
	import {PriceFormatter} from '@/utility/priceFormatter';
	// models
	import cartModel from '@/models/cartModel'; // for MIN/MAX quantity

	export default {
		props: {
			item: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				quantity: this.item.quantity, // Initialize with the current item quantity
        minQuantity: cartModel.getMinQuantity(),
				maxQuantity: cartModel.getMaxQuantity(),
			}
		},
		created() {
		},
		computed: {
			subtotal(){
				return this.item.price * this.quantity;
      }
    },
		methods: {
			formatPrice(price) {
				return PriceFormatter.format(price);
			},
			// event
			onQuantityChange() {
				// clamp/limit
				if (this.quantity > this.maxQuantity) {
					this.quantity = this.maxQuantity;
				}
				if (this.quantity < this.minQuantity) {
					this.quantity = this.minQuantity;
				}
				this.$emit('update-quantity', {id: this.item.id, quantity: this.quantity});
			},
			onDelete() {
				// sending up
				this.$emit('delete', this.item);
			}
		},
	}
</script>

<style lang="scss" scoped>
  // items row
  .row {
    display: flex; // important

    .col {
      padding: 0 0;
      display: flex; // important
      align-items: center; // center V
      justify-content: center;

      height: 105px;
      margin-top: 30px;

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
    }

    // data row styles
    .b-img {
      width: 108px;
      height: 105px;
      border-radius: 10px;
    }

    .b-text {
      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      text-align: center;

      color: #9f9f9f;
    }

    .b-text-black {
      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      text-align: center;

      color: $default-color;
    }

    .b-btn {
      cursor: pointer;
    }

    .b-quantity {
      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $default-color;

      width: 40px;
      padding: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
      text-align: center;
    }

    .b-quantity:focus {
      outline: none;
      border-color: #007bff;
    }

    .b-quantity::-webkit-outer-spin-button,
    .b-quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .b-quantity[type="number"] {
      -moz-appearance: textfield; /* Убираем стрелки в Firefox */
    }
  }
</style>
