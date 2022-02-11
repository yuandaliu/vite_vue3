/**
 * @author ...|...
 * @date 2021.06.25
 * @discription 页面引入按需加载 设置路由拦截器
*/

import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/index'
    },
    {
      name: '首页',
      path: '/index',
      component: () => import('../view/index.vue')
    },
    {
      path: '/detail',
      component: () => import('../view/detail.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router