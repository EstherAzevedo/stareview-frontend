import { createApp } from 'vue'
import App from './App.vue'
import router from './router/indext'
import './assets/main.css'
import '@fontsource/karla/700.css'
import '@fontsource/inconsolata/400.css'

createApp(App).use(router).mount('#app')