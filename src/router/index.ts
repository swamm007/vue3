import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@com/HelloWorld.vue'
import HelloWorld1 from '@com/HelloWorld1.vue'

const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: HelloWorld1
  }
]
const router = createRouter({
  history: routerHistory,
  routes
})

export default router