import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Main/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Menu/:id',
    component: () => import('../Pages/menu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
