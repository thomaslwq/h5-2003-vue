import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login.vue'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Users from './../components/user/Users.vue'
import authority from './../components/authority/list.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/home', component: Home, redirect: '/welcome',
    // home首页组件设置一个子路由 welcome欢迎页面组件
    children: [
      { path: '/welcome', component: Welcome, },
      { path: '/users', component: Users },
      { path: '/roles', component: authority },
    ]
  },


]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
