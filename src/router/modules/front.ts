import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/',
  component: () => import('@/views/Front.vue')
}]

export default routes
