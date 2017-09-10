import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/Login'), // lazy loading
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/components/dashboard/Dashboard'),
      
    },
  ],
});
