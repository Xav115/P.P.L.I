import { createRouter, createWebHistory } from '@ionic/vue-router';
import Login from '../Main/Login.vue'
import Home from '../Main/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: Login
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
    path: '/Place/Views/',
    component: () => import('../Pages/Views.vue')
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
