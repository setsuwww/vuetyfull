<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
    <div class="container mx-auto p-4 flex items-center justify-between">
      <!-- Logo -->
      <Vuetyfull/>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="link-navigation">Home</router-link>
        <router-link to="/destination" class="link-navigation">Destination</router-link>
        <router-link to="/galery" class="link-navigation">Galery</router-link>
        <router-link to="/about" class="link-navigation">About</router-link>
        <router-link to="/contact" class="link-navigation">Contact</router-link>
      </div>

      <!-- CTrouter-link Button -->
      <div class="flex items-center space-x-2">
        <LinkButton to="/auth/login" variant="secondary">Login</LinkButton>
        <LinkButton to="/auth/register" variant="primary">Register</LinkButton>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
        <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <router-link to="/" class="text-gray-600 hover:text-gray-900">Home</router-link>
          <router-link to="/destination" class="text-gray-600 hover:text-gray-900">Destination</router-link>
          <router-link to="/galery" class="text-gray-600 hover:text-gray-900">Galery</router-link>
          <router-link to="/about" class="text-gray-600 hover:text-gray-900">About</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-gray-900">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { History, Heart } from 'lucide-vue-next';
import LinkButton from './ui/LinkButton.vue'
import Vuetyfull from './Vuetyfull.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Scoped styles for Navbar.vue */
</style>