import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 引入axios
import axios from "./common/myaxios"
// 挂载axiosS
Vue.prototype.$axios = axios

// 导入全局样式表
import './assets/css/global.css'

// Vue.use(HighchartsVue)
// 按需引入组件





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
