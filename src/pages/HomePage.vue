<template>
  <div>
    <home-banner></home-banner>
    <home-categories></home-categories>
    <home-product-list
      :products="products"
      @addToCart="addToCart"
    ></home-product-list>
  </div>
</template>

<script>
  // import
	import { productService } from '@/services/services.js';

	import HomeBanner from "@/components/HomeBanner";
	import HomeCategories from "@/components/HomeCategories";
	import HomeProductList from "@/components/HomeProductList";

	export default {
		components: {
			HomeBanner,
			HomeCategories,
			HomeProductList
		},
		data() {
			return {
				products:[],
			}
		},
		async mounted() {
			await this.loadProducts()
		},
		computed: {
		},
		watch: {
		},
		methods: {
      async loadProducts(){
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
        console.log('[HomePage] addToCart. Product = ',product)
			},
		},
	}
</script>

<style scoped>

</style>
