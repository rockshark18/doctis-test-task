<template>
    <navbar></navbar>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
	import Navbar from "@/components/common/Navbar";

	export default {
		components: {
			Navbar
		}
	}
</script>

<style>
    body{
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
