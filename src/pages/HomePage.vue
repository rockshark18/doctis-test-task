<template>
  <navbar :key="forceUpdateKey"></navbar> <!-- NOTE: подход через $ref->method() не использую а использую через :key , т.к. в случае с :key больше декларативности, не увеличивается связность, и не нарушается инкапсуляця (радителю не надо знать о внутреннем устройстве child)   -->
  <home-banner></home-banner>
  <home-categories></home-categories>
  <home-product-list
    :products="products"
    @addToCart="addToCart"
  ></home-product-list>
  <footer-component></footer-component>
</template>

<script>
	// services
	import {productService} from '@/services/services.js';

	// models
	import cartModel from '@/models/cartModel';

	// vue components
	import Navbar from "@/components/common/Navbar";
	import FooterComponent from "@/components/common/Footer";
	import HomeBanner from "@/components/HomeBanner";
	import HomeCategories from "@/components/HomeCategories";
	import HomeProductList from "@/components/HomeProductList";

	export default {
		components: {
			FooterComponent,
			Navbar,
			HomeBanner,
			HomeCategories,
			HomeProductList
		},
		data() {
			return {
				products: [],
				forceUpdateKey: 0,
			}
		},
		async mounted() {
			await this.loadProducts()
		},
		methods: {
			async loadProducts() {
				try {
					this.products = await productService.getProducts();
				} catch (error) {
					// TODO:handle the error
				}
			},
			// event handling
			addToCart(product) {
				cartModel.addItem(product, 1)
				// update
				this.forceUpdateKey++;
			},
		},
	}
</script>

<style scoped>
</style>
