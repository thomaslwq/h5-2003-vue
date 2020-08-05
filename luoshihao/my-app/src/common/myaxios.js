import axios from 'axios'

// 配置拦截器

// 请求的拦截
axios.interceptors.request.use(function(config){
  return config;
},function(error){
  return Promise.reject(error)
})

// 响应的拦截
axios.interceptors.response.use(function(response){
  // 返回数据中的data
  return response.data;
},function(error){
  return Promise.reject(error)
})

// 导出自定义的axios
export default axios
