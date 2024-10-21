import {createRouter, createWebHistory} from "vue-router";

import HomePage from "@/pages/HomePage";
import CartPage from "@/pages/CartPage";
import MockPage from "@/pages/MockPage"; // NOTE: 2024/10/17 for debugging only!

const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/cart',
		component: CartPage
	},
	{
		path: '/mock/:arg',
		component: MockPage
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;
