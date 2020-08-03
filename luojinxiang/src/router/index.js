import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem("token");
  if(to.name==="Login"||tokenStr){ // 验证通过
      next();
  }else{
      next({path:"/login"});// 跳转登录页面
  }
})

export default router
