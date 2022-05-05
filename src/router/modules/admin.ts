import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
  path: '/admin',
  component: () => import('@/views/Admin.vue'),
  redirect: { name: 'Dashboard' },
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/admin/Dashboard.vue')
  },
  {
    path: 'userList',
    name: 'UserList',
    component: () => import('@/views/admin/UserList.vue')
  }]
}]
export default routes
