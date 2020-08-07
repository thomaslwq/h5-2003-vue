import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Productgrid from "../views/Productgrid.vue";
import ProductDetails from "../views/ProductDetails";

import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Cart from "../views/Cart.vue";

Vue.use(VueRouter)
import Changemessage from "../components/ChangeMessage.vue"
import Wish from "../components/Wish.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/productgrid",
    name: "Productgrid",
    component: Productgrid
  },
  {
    path:"/productDetails",
    name:"ProductDetails",
    component:ProductDetails
  },
  {
    path: "/ChangeMessage",
    name:"ChangeMessage",
    component: Changemessage
  },
  {
    path: "/Wish",
    name:"Wish",
    component: Wish
  },
  {
    path: "/Login",
    name:"Login",
    component: Login
  },
  {
    path:"/Cart",
    name:"Cart",
    component:Cart
  },
  {
    path:"/Register",
    name:"Register",
    component:Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 开启导航守卫
router.beforeEach((to,from,next)=>{
  const userID = localStorage.getItem("userID");
  if(to.name == "Login" || to.name == "Register" ||  to.name == "Home"){
      next();
  }else{
      if(userID){
        next();
      }else{
        next({path:"/Login"})
      }
  }
})

export default router
