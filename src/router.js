import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from '@/views/CardDetails.vue'
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/employees/:id', name: 'CardDetails', component: () => import('@/views/CardDetails.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
