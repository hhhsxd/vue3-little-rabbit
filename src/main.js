
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {lazyPlugin} from '@/directives'
import App from './App.vue'
import router from './router'
//初始化样式文件
import '@/styles/common.scss'

//全局注册component文件夹下面的组件
import {componentPlugin} from '@/components/index.js'
//全局注册pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.mount('#app')

//导入懒加载指令
app.use(lazyPlugin)

