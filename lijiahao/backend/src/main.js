import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios = axios
import 'view-design/dist/styles/iview.css';
import { Layout,Menu,MenuItem,Icon,BreadcrumbItem,Sider,Submenu} from 'view-design';
Vue.config.productionTip = false
Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Icon', Icon);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Sider', Sider);
Vue.component('Submenu', Submenu);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
