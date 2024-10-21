// NOTE: 2024/10/17 - do styles reset first of all!
import '@/assets/styles/reset.css'
import '@/assets/styles/fonts.css'
import '@/assets/styles/default.scss'
import '@/assets/styles/debug.css' // NOTE: debug only

import { createApp } from 'vue'
import App from './App'
import router from "@/router/router";

const app = createApp(App)

app
	.use(router)
	.mount('#app');
