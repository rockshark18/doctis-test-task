<template>
  <navbar></navbar>
  <div class="block">
    <h1>This is a temporary mock page!</h1>
    <h2>Mock arg = `{{ $route.params.arg }}`</h2>
  </div>
  <footer-component></footer-component>

</template>

<script>
	import Navbar from "@/components/common/Navbar";
	import FooterComponent from "@/components/common/Footer";

	export default {
		components: {
			FooterComponent,
			Navbar,
		}
	}
</script>

<style lang="scss" scoped>
  .block{
    min-height: 600px;
    margin-top: 64px;

  }
</style>
