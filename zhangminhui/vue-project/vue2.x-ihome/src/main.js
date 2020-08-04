import Vue from 'vue'
import { Icon,Message,Container,Aside,Main,Notification } from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "../common/myaxios";
axios.defaults.baseURL = process.env.VUE_APP_URL
import qs from "qs";

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'


Vue.use(Icon);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.config.productionTip = false;
//引入elment ui 的提示效果
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
//引入axios
Vue.prototype.$axios = axios;
Vue.prototype.$qs=qs;
//引入swiper
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')