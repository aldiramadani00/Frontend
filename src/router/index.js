import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Shortlink from '../views/Shortlink.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registrasi',
      name: 'registrasi',
      component: Registration
    },
    {
      path: '/shortlink',
      name: 'shortlink',
      component: Shortlink 
    }
  ]
})

export default router
