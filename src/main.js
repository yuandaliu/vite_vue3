import { createApp } from 'vue'
import App from './App.vue'
import Elementplus from 'element-plus' // 注册组件
import 'element-plus/lib/theme-chalk/index.css'  // 全局引入组件样式
import router from './router'

// createApp(App).use(Elementplus, {size: 'small'}).mount('#app')  // 链式写法

const app = createApp(App) // 创建实例
app.use(Elementplus, {size: 'small'}) // 将Element-plus全局挂载到Vue的原型上 设置其主题大小为small
app.use(router)
app.mount('#app')
