import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import DevicesView from '@/pages/DevicesView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: HomeView
  },
  {
    path: '/devices',
    name: 'Devices',
    component: DevicesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
