import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios"
import { Message } from "element-ui"

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'


Vue.config.productionTip = false;
//引入elment ui 的提示效果
Vue.prototype.$message = Message;
//引入axios
Vue.prototype.$axios = axios;
//引入swiper
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
