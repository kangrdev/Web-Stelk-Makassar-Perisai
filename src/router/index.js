import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'home',
    
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'kk',
    
    component: () => import( '../views/HomeLog.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
