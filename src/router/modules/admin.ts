import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/admin',
  component: () => import('@/views/Admin.vue')
}]
export default routes
