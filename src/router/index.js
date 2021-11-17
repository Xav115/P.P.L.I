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
  },
  {
    path: '/Place/Favorites/',
    component: () => import('../Pages/Favorites.vue')
  },
  {
    path: '/Place/Settings/',
    component: () => import('../Main/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
