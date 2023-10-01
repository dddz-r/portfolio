import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import { createPinia } from 'pinia';
// import VueSimpleAlert from 'vue3-simple-alert'
const app = createApp(App)

const pinia = createPinia();
app.use(pinia);
app.use(router);
// app.use(VueSimpleAlert);
app.mount('#app');
