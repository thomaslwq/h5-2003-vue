import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        redirect() {
            return '/index'
        },
        component: ()=>import('../views/Home/Home'),
        children: [{
            path: 'order',
            name: 'order',
            component: () => import('../components/product/Deal.vue'),
            },
            {
                path: 'index',
                name: 'index',
                component: () => import('../components/home/index.vue'),
            },
            {
                path:'manage',
                name:'manage',
                component:()=>import('../components/category/Manage')
            },
            {
                path:'goodslist',
                name:'goodslist',
                component:()=>import('../components/goodslist/goodslist.vue')
            },
            {
                path:'information',
                name:'information',
                component:()=>import('../components/information/information.vue')
            },
            {
                path:'user',
                name:'user',
                component:()=>import('../components/user/user.vue')
            },
            {
                path:'caretaker',
                name:'caretaker',
                component:()=>import('../components/caretaker/caretaker.vue')
            }
            ]
    },
    {
        path: '*',
        name:'Nofind',
        component:()=>import('../views/Nofind')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
