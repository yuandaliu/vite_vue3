/**
 * @author: ...|...;
 * @date: 2021.06.25;
 * @discription: 页面引入按需加载 设置路由拦截器
*/

import fetch from '../util/http'
export function getUser () {
  return fetch({
    url: 'api/users',
    method: 'get'
  })
}