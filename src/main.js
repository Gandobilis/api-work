import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store"
import router from "./router";
import axios from 'axios';
import auth from "./plugins/auth.js";

const token = localStorage.getItem('token');

axios.defaults.baseURL = import.meta.env.VITE_APP_API_ENDPOINT;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

createApp(App).use(store).use(router).use(auth, {store, router}).mount('#app')
