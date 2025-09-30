import { createRouter, createWebHistory } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import LandingPage from '@/views/LandingPage.vue'

import Login from '@/pages/auth/LoginForm.vue'
import Register from '@/pages/auth/RegisterForm.vue'
import AuthLayout from '@/pages/auth/AuthLayout.vue'
import Dashboard from '@/pages/admin/Dashboard.vue'
import Create from '@/pages/admin/destination/Create.vue'

import AdminDestinations from '@/pages/admin/destination/DestinationPage.vue'
import AdminGallery from '@/pages/admin/galery/GaleryPage.vue'
import AdminUsers from '@/pages/admin/users/UsersPage.vue'

import DestinationPage from '@/views/user/destination/DestinationPage.vue'
import DestinationDetail from '@/views/user/destination/DestinationDetail.vue'
import GaleryPage from '@/views/user/galery/GaleryPage.vue'
import AboutPage from '@/views/user/about/AboutPage.vue'
import ContactPage from '@/views/user/contact/ContactPage.vue'
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
      {
        path: 'destinations',
        name: 'AdminDestinations',
        component: AdminDestinations,
      },
      {
        path: 'gallery',
        name: 'AdminGallery',
        component: AdminGallery,
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: AdminUsers,
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
      {
        path: 'about',
        name: 'About',
        component: AboutPage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router