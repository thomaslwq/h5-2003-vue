import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Productgrid from "../views/Productgrid.vue";
import Cart from "../views/Cart.vue";

import Login from "../components/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Home",
    component:Home
  },
  {
    path:"/productgrid",
    name:"Productgrid",
    component:Productgrid
  },
  {
    path:"/cart",
    name:"Cart",
    component:Cart
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
