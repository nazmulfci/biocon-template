import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: () => import('../views/Contact.vue')

    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/projects.vue')

    }
  ]
})

export default router
