import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import store  from './store'

import Elementplus from 'element-plus' // 注册element UI组件
import 'element-plus/lib/theme-chalk/index.css'  // 全局引入组件样式

import * as echarts from 'echarts'  // 全部引入echarts

import './assets/style/common.less' // 引入全局样式

// createApp(App).use(Elementplus, {size: 'small'}).mount('#app')  // 链式写法
const app = createApp(App) // 创建实例

app.use(Elementplus, {size: 'small'}) // 将Element-plus全局挂载到Vue的原型上 设置其主题大小为small

app.config.globalProperties.$echarts = echarts // 将echarts挂载到全局上

app.use(store)

app.use(router)

app.mount('#app')
