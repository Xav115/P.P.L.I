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
    path: '/PlaceDetails/:id',
    component: () => import('../Pages/PlaceDetails.vue')
  },
  {
    path: '/Place/Add/',
    component: () => import('../Main/AddPlace.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
