/**
 * @author ...|...
 * @date 2021.06.25
 * @discription 页面引入按需加载 设置路由拦截器
*/

import axios from 'axios'

const service = axios.create({
  // baseURL: `process.env.${VUE_APP_BASE_API0}`,  // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 000, // request timeout
  responseType: 'json',
  headers: {
    Accept: "application/json",
    Authorization: "Bearer eyJddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd+"
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前要做的的事情
    return config
  },
  function(error) {
    // 对请求错误要做的事情
    return Promise.reject(error)
  }
)

// 添加相应拦截器
service.interceptors.response.use(
  function(response) {
    // 对相应数据要做的事情
    return response
  },
  function(error) {
    // 对相应错误要做的事情
    return Promise.reject(error)
  }
)

export default service