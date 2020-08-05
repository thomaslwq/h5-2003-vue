import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductionRouter from './production'
import DataRouter from './data'
import CustomerRouter from './customer'
import FinanceRouter from './finance'
import OrderRouter from './orders'
import MarketingRouter from './marketing'
import StoreRouter from './store'
import TicketRouter from './ticket'

Vue.use(VueRouter)
const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Home',
    component: Home
  }
];

//其他未定义的路由都会到首页
const unknowRouter = [
  {
    path: '/*',
    name: 'Home',
    component: Home
  }
]
const routes = baseRoutes.concat(StoreRouter,ProductionRouter,DataRouter,CustomerRouter,FinanceRouter,OrderRouter,MarketingRouter,TicketRouter,unknowRouter);
export default new VueRouter({
    //去除访问路径“#”
    mode: 'history',
    routes,
});
