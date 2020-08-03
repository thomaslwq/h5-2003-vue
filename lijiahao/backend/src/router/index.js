import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/Goods/Goods.vue')
      },
      {
        path: '/',
        name: 'Home',
        component: ()=>import('../views/Home/Home')
      },
      {
          path: '*',
          name:'Nofind',
          component:()=>import('../views/Nofind')
      }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
