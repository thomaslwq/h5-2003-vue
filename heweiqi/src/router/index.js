import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component:login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    redirect:'login'
  }
]

const router = new VueRouter({
  routes
})

export default router
