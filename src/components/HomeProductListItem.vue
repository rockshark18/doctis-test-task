<template>
  <div class="card-container">

    <div v-if="markerText.length>0" class="marker__container">
      <div class="marker" :class="markerClass">{{markerText}}</div>
    </div>

    <img class="card-container__img" :src="require('@/assets/images/products/'+product.image)"/>

    <div class="info">
      <div class="info__name">{{product.name}}</div>
      <div class="info__desc">{{product.desc}}</div>
    </div>

    <div class="price-block">
      <div class="price-block__final-price">{{formatPrice(finalPrice)}}</div>
      <div class="price-block__price">{{formatPrice(oldPrice)}}</div>
    </div>

    <!-- Overlay content -->
    <div class="overlay">
      <button class="overlay__button" @click="console.log('Add to cart')">Add to cart</button> <!-- TODO: handle add-to-cart logic -->

      <div class="overlay__icons">
        <div class="overlay__icon">
          <img class="overlay__icon-img" src="@/assets/images/components/HomeProductListItem/share.svg"/> <span>Share</span>
        </div>
        <div class="overlay__icon">
          <img class="overlay__icon-img" src="@/assets/images/components/HomeProductListItem/compare.svg"/> <span>Compare</span>
        </div>
        <div class="overlay__icon">
          <img class="overlay__icon-img" src="@/assets/images/components/HomeProductListItem/like.svg"/> <span>Like</span>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
	import {PriceFormatter} from '@/utility/priceFormatter';

	export default {
		props: {
			product: {
				type: Object,
				required: true,
			}
		},

		components: {},
		data() {
			return {
				currency: 'Rp',
				finalPrice: 2500000,
				oldPrice: 14000000,
				markerClass: '',
				markerText: ''
			}
		},
		created() {
			this.processProduct(); // NOTE: gpt advices this place to one-time calcs not 'mounted' hook
		},
		mounted() {
		},
		computed: {},
		watch: {},
		methods: {
			processProduct() {
				// priority: 1) sale first 2) 'new' marker
				if (this.product.isNew === true) {
					this.markerText = 'New';
					this.markerClass = 'marker__new';
				}

				if (this.product.sale) {
					this.finalPrice = this.product.salePrice;
					this.oldPrice = this.product.price;
					this.markerText = -this.product.sale + '%';
					this.markerClass = 'marker__sale';
				} else {
					this.finalPrice = this.product.price;
					this.oldPrice = 0;
				}
			},
			formatPrice(price) {
				if (price > 0) {
					return PriceFormatter.format(price);
				} else {
					return '';
				}
			}

		},
	}
</script>

<style lang="scss" scoped>
  .card-container {
    position: relative;
    cursor: pointer;
    background-color: #F4F5F7;
    width: 285px;
    height: 446px;
    margin-bottom: 30px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &__img {
      width: 285px;
      height: 301px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(40, 40, 40, 0.6);
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: opacity 0.3s ease;
      z-index: 1;

      &:hover {
        opacity: 1;
      }

      &__button {
        padding: 10px 50px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
        z-index: 2;

        font-family: $primary-font;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #B88E2F;
      }

      &__icons {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 250px;
        z-index: 2;
        color: #fff;

        font-family: $primary-font;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }

      &__icon {
        display: flex;
        align-items: center;
        color: #fff;
        margin-right: 10px;

        &-img {
          width: 16px;
          height: 16px;

          margin-right: 6px;
        }
      }
    }
  }

  .marker {
    &__container {
      position: relative;
    }

    position: absolute;
    left: 213px;
    top: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    font-family: $primary-font;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    padding-top: 12px;

    &__sale {
      background-color: #e97171;
    }

    &__new {
      background-color: #2EC1AC;
    }
  }

  .info {
    padding: 14px 14px;

    &__name {
      font-family: $primary-font;
      font-weight: 600;
      font-size: 24px;
      line-height: 28.8px;
      color: #3a3a3a;
    }

    &__desc {
      font-family: $primary-font;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #898989;
      margin-top: 8px;
    }
  }

  .price-block {
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price-block__final-price {
      font-family: $primary-font;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #3a3a3a;
    }

    .price-block__price {
      font-family: $primary-font;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #B0B0B0;
      text-decoration: line-through;
    }
  }
</style>
