import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/Report',
    name: '',
    component: () => import('@/pages/Report.vue'),
  },
  {
    path: '/KichBan',
    name: 'KichBan',
    component: () => import('@/pages/KichBan.vue'),
  },
  {
    path: '/BieuMau',
    name: 'BieuMau',
    component: () => import('@/pages/BieuMau.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/User.vue'),
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: () => import('@/pages/ProductDetail.vue'),
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: () => import('@/pages/NewProduct.vue'),
  },
  {
    path: '/KichBan/:KichBanId',
    name: 'KichBanDetail',
    component: () => import('@/pages/KichBanDetail.vue'),
  },
  {
    path: '/Report/:ReportId',
    name: 'ReportDetail',
    component: () => import('@/pages/ReportDetail.vue'),
  }
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})
export default router
