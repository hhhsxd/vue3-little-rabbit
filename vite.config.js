import {fileURLToPath, URL} from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','@vueuse/core','vue-router'],
      resolvers:[ElementPlusResolver()],
      eslintrc:{
        enabled:true,
        filepath:'./.eslintrc-auto-import.json',
        globalsPropValue:true,
      },
    }),
    Components({
      resolvers:[ElementPlusResolver({
        importStyle:"sass",
      })],
    }),
    // ElementPlus({
    //   useSource:true,
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',import.meta.url)),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{//这里配置自动导入scss，在调用的时候就不用import了
        additionalData:`@use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss"as *;
        `,
      },
    },
  },


})
