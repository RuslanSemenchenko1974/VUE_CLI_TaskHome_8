import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import store from './store';
import './assets/style/style.css'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
