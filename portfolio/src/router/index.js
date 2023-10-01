import { createRouter, createWebHistory } from 'vue-router'

// import HelloWorld from '../components/HelloWorld.vue';
import MainPage from '../components/MainPage.vue';

// 라우터 설계
const routes = [
    { path: '/main', component:MainPage},
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;