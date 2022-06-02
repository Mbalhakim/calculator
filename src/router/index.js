import { createRouter, createWebHashHistory } from 'vue-router'
import Calculator from '../views/Calculator.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Calculator
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
