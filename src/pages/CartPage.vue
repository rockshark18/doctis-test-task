<template>
  <navbar></navbar>
  <cart-banner></cart-banner>
  <cart-details></cart-details>

  <!-- info / highlights -->
  <div class="highlights">
    <div v-for="i in highlightItems"
         :key="i.title"
         class="item"
    >
      <div class="item__img ndbg">
        <img :src="require('@/assets/images/cart/'+i.img)"/>
      </div>
      <div class="item__content ndbg">
        <div class="item__content-title ndbgr">
          {{i.title}}
        </div>
        <div class="item__content-text ndbgr">
          {{i.text}}
        </div>

      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
	import Navbar from "@/components/common/Navbar";
	import FooterComponent from "@/components/common/Footer";
	import CartBanner from "@/components/CartBanner";
	import CartDetails from "@/components/CartDetails";

	export default {
		components: {
			FooterComponent,
			Navbar,
			CartBanner,
			CartDetails,
		},
		data() {
			return {
				highlightItems: [
					{title: 'High Quality', text: 'crafted from top materials', img: 'icon-cup.svg'},
					{title: 'Warranty Protection', text: 'Over 2 years', img: 'icon-warranty.svg'},
					{title: 'Free Shipping', text: 'Order over 150 $', img: 'icon-shipping.svg'},
					{title: '24 / 7 Support', text: 'Dedicated support', img: 'icon-support.svg'},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
  .highlights {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 1440px;
    height: 270px;

    background-color: #FAF3EA;

    padding: 0 53px;
  }

  .item {
    display: flex;
    align-items: center; // center V (NOTE: importnant here!)

    &__img { // NOTE: can be removed
      width: 60px;
      height: 60px;
    }

    &__content {
      padding-left: 10px;

      &-title {
        font-family: $primary-font;
        font-weight: 600;
        font-size: 25px;
        line-height: 37.5px;

        color: #242424;
      }

      &-text {
        font-family: $primary-font;
        font-weight: 00;
        font-size: 20px;
        line-height: 30px;

        color: #898989;
      }
    }
  }
</style>
