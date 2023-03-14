import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store"
import router from "./router";

//axios.defaults.baseURL = import.meta.env.VITE_APP_API_ENDPOINT

createApp(App).use(store).use(router).mount('#app')
