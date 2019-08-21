import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue";
import Login from '@/views/Login/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: "/password",
            name: "password",
            component: () => import("@/views/Login/Password.vue")
        },
        {
            path: "/LoginHeader",
            name: "LoginHeader",
            component: () => import("@/views/Login/LoginHeader.vue")
        }
    ]
});

// 路由拦截
router.beforeEach((to: any, from: any, next: any) => {
    console.log(to, from, next);
    const isLogin = !localStorage.tsToken; //有token 表示已登录
    console.log(isLogin);
    if (isLogin) {
        next();
    } else {
        router.push("/login")
    }
});


export default router;
