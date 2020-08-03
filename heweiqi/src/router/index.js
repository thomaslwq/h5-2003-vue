import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login.vue'
import Home from './../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', redirect: '/login' },
  { path: '/login', name: 'login', component: login },
  { path: '/home', name: 'home', component: Home },

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
