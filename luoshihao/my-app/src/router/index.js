import Vue from "vue";
import VueRouter from "vue-router";

//  导入路由
import Home from "../components/home";
import Merchant from "../components/merchant";
import MerchantAdd from "../components/merchantAdd";
import ShopAdd from "../components/shopAdd";
import Shop from "../components/shop";
import Statistics  from "../components/statistics";
import User from "../components/user";
import Intellectual from "../components/intellectual"
Vue.use(VueRouter);


const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/merchant",
      name: "Merchant",
      component: Merchant
    },
    {
      path: "/merchantAdd",
      name: "MerchantAdd",
      component: MerchantAdd
    },
    {
      path: "/shopAdd",
      name: "ShopAdd",
      component: ShopAdd
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: Statistics
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/intellectual",
      name: "Intellectual",
      component: Intellectual
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
//  全局守卫

export default router;
