import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const DocumentationView = () => import('@/views/DocumentationView.vue')
const ContactsView = () => import('@/views/ContactsView.vue')
const AboutDeveloperView = () => import('@/views/AboutDeveloper.vue')

const router = createRouter({
  linkExactActiveClass: 'border-b border-white',
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      const elm = document.querySelector(to.hash)
      setTimeout(() => {
        elm?.scrollIntoView()
      }, 1500)
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
    },
    {
      path: '/@developer',
      name: 'aboutDeveloper',
      component: AboutDeveloperView
    }
  ]
})

export default router
