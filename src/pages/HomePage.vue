<template>
  <div>
    <!--<h1>Home</h1>-->
    <home-banner></home-banner>
    <home-categories></home-categories>
  </div>
</template>

<script>
	import HomeBanner from "@/components/HomeBanner";
	import HomeCategories from "@/components/HomeCategories";

	export default {
		components: {
			HomeBanner,
			HomeCategories
		},
	}
</script>

<style scoped>

</style>
