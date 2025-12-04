import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../pages/About.vue') },
  { path: '/programs', name: 'Programs', component: () => import('../pages/Programs.vue') },
  { path: '/locations', name: 'Locations', component: () => import('../pages/Locations.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
