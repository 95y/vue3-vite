import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/home/index.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/login/index.vue') }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes // 路由规则
})

export default router
