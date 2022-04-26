/*
 * @Author: your name
 * @Date: 2022-04-26 14:57:39
 * @LastEditTime: 2022-04-26 16:47:10
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-vite\src\utils\request.ts
 */
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
})

// request 不支持泛型
// request.get、post、put 支持响应数据泛型
// 由于我们的后端又包装一层数据 data，导致我们访问数据比较麻烦，所以我们自己封装一个 request

// 请求拦截器
request.interceptors.request.use(config => {
  console.log(config)

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
