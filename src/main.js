// NOTE: 2024/10/17 - do css reset first of all!
import './assets/css/reset.css'
import './assets/css/debug.css' // NOTE: debug only
import './assets/css/fonts.css'

import { createApp } from 'vue'
import App from './App'
import router from "@/router/router";

const app = createApp(App)

app
	.use(router)
	.mount('#app');
