import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin'
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 统一设置用户身份 token
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  // 统一处理接口响应错误, 比如 token 过期无效、服务的异常等
  return response
}, error => {
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
