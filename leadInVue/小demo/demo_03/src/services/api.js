import http from '../utils/https'
//
/**
 *  @param  request 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 *  @param params 代表传进来的参数
 */
let request = '/testIp/request/'

// get请求
export function getListAPI (params) {
  return http.post('/mode2/DataOne', params)
}
// post请求
export function postFormAPI (params) {
  return http.post(`${request}/postForm.json`, params)
}
// put 请求
export function putSomeAPI (params) {
  return http.put(`${request}/putSome.json`, params)
}
// delete 请求
export function deleteListAPI (params) {
  return http.delete(`${request}/deleteList.json`, params)
}
