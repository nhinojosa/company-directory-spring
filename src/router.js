import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()

import HomePage from '@/views/HomePage.vue'
import CardDetails from '@/views/CardDetails.vue'
import LoginPage from '@/views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

const routes = [
  { path: '/company-directory-spring/', name: 'Home', component: HomePage },
  { path: '/company-directory-spring/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/company-directory-spring/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/company-directory-spring/login', name: 'LoginPage', component: LoginPage },
  { path: '/company-directory-spring/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  else next()
})

export default router
