import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import axios from "../common/myaxios";
axios.defaults.baseURL = process.env.VUE_APP_URL
import qs from "qs";
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs=qs;
Vue.use(ElementUI, {
    size: 'small'
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
