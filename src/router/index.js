import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404page.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/log-in',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: NotFound
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
  })

export default router
