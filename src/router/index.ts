import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = []

const modules = import.meta.globEager('./modules/*.ts')

for (const path in modules) {
  routes.push(...modules[path].default)
}

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
