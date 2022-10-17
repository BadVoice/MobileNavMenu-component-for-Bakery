import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/:cake",
      name: 'NavMenu',
      component: NavMenu
    }


  
  ]
})

export default router
