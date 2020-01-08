import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import home from "./components/Home.vue";
import login from "./components/Login.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: "/home",
        component: home
    },
    {
        path: "/login",
        component: login
    }

]

const router = new VueRouter({
    routes
})

export default router;
