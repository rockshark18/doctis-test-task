<template>
  <navbar></navbar>
  <router-view></router-view>
  <footer-component>Test! This text is shown ok !</footer-component>
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

<style>
</style>
