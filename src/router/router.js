import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage";
import CartPage from "@/pages/CartPage";
/*
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
*/

const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/cart',
		component: CartPage
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;
