import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Productgrid from "../views/Productgrid.vue";
import ProductDetails from "../views/ProductDetails";


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
    path:"/productDetails",
    name:"ProductDetails",
    component:ProductDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
