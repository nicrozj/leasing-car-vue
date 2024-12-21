import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/index.vue';
import './main.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Index }],
});

const app = createApp(Index); 
app.use(router).mount('#app');