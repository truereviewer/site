import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const DocumentationView = () => import('@/views/DocumentationView.vue')
const ContactsView = () => import('@/views/ContactsView.vue')

const router = createRouter({
  linkExactActiveClass: 'border-b border-white',
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      if (to.hash) {
        const elm = document.querySelector(to.hash)
        setTimeout(() => {
          elm?.scrollIntoView()
        }, 100)
      }

      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/documentation',
      name: 'documentation',
      component: DocumentationView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
