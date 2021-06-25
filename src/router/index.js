/**
 * @author: ...|...;
 * @date: 2021.06.25;
 * @discription: 页面引入按需加载 设置路由拦截器
*/

import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../view/Home.vue')
    },
    {
      path: '/about',
      component: () => import('../view/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to:', to, 'from:', from);
  next()
})

export default router