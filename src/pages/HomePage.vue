<template>
  <navbar :trigger="addItemTriggerCounter"></navbar>
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
        addItemTriggerCounter: 0,
			}
		},
		async mounted() {
			await this.loadProducts()
		},
		methods: {
			async loadProducts() {
				console.log('[HomePage] loadProducts')
				try {
					this.products = await productService.getProducts();
					console.log('[HomePage] loadProducts. OK', this.products)
				} catch (error) {
					console.error('[HomePage] loadProducts. ERROR: ', error)
				}
			},
			// event handling
			addToCart(product) {
				cartModel.addItem(product, 1)
				// update
				this.addItemTriggerCounter++;
			},
		},
	}
</script>

<style scoped>
</style>
