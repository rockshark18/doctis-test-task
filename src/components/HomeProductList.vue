<template>
  <div class="container ndbg">

    <div class="header ndbg">
      <div class="header__title">Our Products</div>
    </div>

    <div class="content ndbg">
      <home-product-list-item
        v-for="p in products"
        :key="p.id"
        :product="p"
        class=""
      >
      </home-product-list-item>
    </div>
  </div>
</template>

<script>
	import HomeProductListItem from "@/components/HomeProductListItem";

	export default {
		props: {
			products: {
				type: Array,
				required: true
			}
		},

		components: {
			HomeProductListItem
		},
		data() {
			return {}
		},
		mounted() {
		},
		computed: {},
		watch: {},
		methods: {},
	}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 50px; // NOTE: very bad practice

    width: 1440px;
    height: auto;
  }

  .header {
    text-align: center;

    &__title {
      font-family: $primary-font;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;

      color: #3a3a3a;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap; // for carrying on new line
    justify-content: space-between;

    padding: 0 102px;

    margin-top: 60px;
  }

</style>
