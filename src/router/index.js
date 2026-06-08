import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Privacy from '@/pages/PrivacyPolicy.vue'
import Terms from '@/pages/Terms.vue'
import Disclaimer from '@/pages/Disclaimer.vue'

const routes = [
  { path: '/els', name: 'Home', component: Home },
  { path: '/els/privacy', name: 'PrivacyPolicy', component: Privacy },
  { path: '/els/terms', name: 'Terms', component: Terms },
  { path: '/els/disclaimer', name: 'Disclaimer', component: Disclaimer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
