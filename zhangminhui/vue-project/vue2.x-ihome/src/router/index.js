import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Productgrid from "../views/Productgrid.vue";


Vue.use(VueRouter)
import Changemessage from "../components/ChangeMessage.vue"
import Wish from "../components/Wish.vue"
import Login from "../components/Login.vue"
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
    path:"/ChangeMessage",
    component:Changemessage
  },
  {
    path:"/Wish",
    component:Wish
  },
  {
    path:"/Login",
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
