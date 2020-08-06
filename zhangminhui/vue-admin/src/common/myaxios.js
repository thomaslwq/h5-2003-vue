// 1. 引入 axios
import axios from "axios"
// 配置公共的ulr 
 axios.defaults.baseURL = "http://175.24.122.212:10500/"
// axios.defaults.baseURL = "http://localhost:10500/"
// 配置一个 请求 的拦截器
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 返回返回数据中的 data 
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  // 导出自定义的 axios
  export default axios 