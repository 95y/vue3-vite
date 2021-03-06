import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@comp': path.join(__dirname, 'src/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagou.com/api/',
        changeOrigin: true
        // 路径重写
        // rewrite不设置 =>  http://jsonplaceholder.typicode.com/api/xxx   /api/xxx => http://jsonplaceholder.typicode.com/api/xxx
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
