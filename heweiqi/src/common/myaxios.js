// 1. 引入 axios
import axios from "axios"
// 配置公共的ulr 
axios.defaults.baseURL='http://119.23.53.78:8888/api/private/v1/'

// 配置一个 请求 的拦截器
axios.interceptors.request.use(function (config) {
    // KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS
    let data = config.data || {};// get 请求时候是没有 data 防御性代码
    // data["oauth_token"] = "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS";// 在登录的情况下是存在 如果没有登录是不存在的
    config.data = data;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 返回返回数据中的 data 
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  // 导出自定义的 axios
  export default axios 