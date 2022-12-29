import { createRouter, createWebHistory } from 'vue-router';
import BasilicoArtView from '@/views/BasilicoArtView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BasilicoArtView',
      component: BasilicoArtView
    },
  ]
})

export default router
