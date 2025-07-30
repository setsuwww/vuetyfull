import { createRouter, createWebHistory } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import LandingPage from '@/views/LandingPage.vue'

import Login from '@/pages/auth/LoginForm.vue'
import Register from '@/pages/auth/RegisterForm.vue'
import AuthLayout from '@/pages/auth/AuthLayout.vue'
import Dashboard from '@/pages/admin/Dashboard.vue'
import Create from '@/pages/admin/destination/Create.vue'

import DestinationPage from '@/views/user/destination/DestinationPage.vue'
import DestinationDetail from '@/views/user/destination/DestinationDetail.vue'
import GaleryPage from '@/views/user/galery/GaleryPage.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

const routes = [
  { // Auth Routes
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ],
  },

  { // Admin Dashboard Routes
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'create',
        name: 'Create',
        component: Create,
      },
    ],
  },

  { // User Content Routes
    path: '/',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'Landing',
        component: LandingPage,
      },
      {
        path: 'destination',
        name: 'Destination',
        component: DestinationPage,
      },
      {
        path: 'destination/:id',
        name: 'DestinationDetail',
        component: DestinationDetail,
        props: true
      },
      {
        path: 'galery',
        name: 'Galery',
        component: GaleryPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
