import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import TrabajosView from '../views/TrabajosView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    component: AboutView
  },
  {
    path: '/trabajos',
    name: 'Trabajos',
    component: TrabajosView
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: ContactView
  },
  {
    path: "/proyecto/:id",
    component: () => import("../views/ProyectoView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router