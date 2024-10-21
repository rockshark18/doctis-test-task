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
  body {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 28px;
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
  }
</style>
