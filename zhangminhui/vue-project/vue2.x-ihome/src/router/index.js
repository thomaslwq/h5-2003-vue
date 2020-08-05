import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Productgrid from "../views/Productgrid.vue";
import Login from "../components/Login.vue"

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
<<<<<<< HEAD
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
=======
>>>>>>> f3050cd394db9f74d2c63078df12f261e1d12e99
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
