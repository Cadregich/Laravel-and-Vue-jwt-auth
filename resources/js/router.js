import {createRouter, createWebHistory} from 'vue-router';
import * as middlewares from './middlewares.js';
import store from "./vuex";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/Home.vue'),
            name: 'home'
        },
        {
            path: '/registration',
            component: () => import('./components/Registration.vue'),
            name: 'registration',
            beforeEnter: middlewares.guest
        },
        {
            path: '/login',
            component: () => import('./components/Login.vue'),
            name: 'login',
            beforeEnter: middlewares.guest
        },
        {
            path: '/user-data',
            component: () => import('./components/UserData.vue'),
            name: 'user-data',
            beforeEnter: middlewares.auth
        },
        {
            path: '/logout',
            component: () => import('./components/Logout.vue'),
            name: 'logout',
            beforeEnter: middlewares.auth
        }
    ],
});

router.beforeEach(async (to, from, next) => {
    const cookie = await store.dispatch('getCookie', 'ait');
    if (!cookie) {
        if (store.getters.Auth) {
            console.warn('Authorization token has expired');
            store.dispatch('logout');
        }
    }
    next();
});

export default router;
