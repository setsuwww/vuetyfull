<template>
  <div
    :class="[
      'transition-all duration-300 h-screen shadow-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200',
      isCollapsed ? 'w-16' : 'w-64'
    ]"
  >
    <div class="p-4">
      <h2 :class="['flex items-center gap-2 p-2 text-xl font-bold text-gray-800 transition-opacity duration-300',
          isCollapsed ? 'opacity-0' : 'opacity-100'
        ]"
      >
        <img src="/vuetyfull.png" alt="Logo" class="w-10 h-10" />
        <span>Flashcashier</span>
      </h2>
    </div>

    <nav class="space-y-2 p-2 mt-3">
      <router-link v-for="(item, index) in navItems" :key="index" :to="item.path"
          :class="['flex items-center gap-x-2 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 border border-transparent',
            isActive(item.path)
              ? 'bg-white shadow-sm border-gray-100 text-orange-600'
              : 'text-gray-700 hover:text-orange-600'
          ]"
        >
        <span :class="['text-lg',
            isActive(item.path) ? 'text-orange-500' : 'text-orange-400'
          ]"
        >
          <i :class="['fas', item.icon]"></i>
        </span>
        <span v-if="!isCollapsed">{{ item.label }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isCollapsed = ref(false)

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: 'fa-home' },
  { label: 'Destinations', path: '/admin/destinations', icon: 'fa-map-marker-alt' },
  { label: 'Gallery', path: '/admin/gallery', icon: 'fa-image' },
  { label: 'Users', path: '/admin/users', icon: 'fa-users' },
]

const isActive = (path) => route.path === path
</script>

<style scoped>
/* Jika pakai fontawesome CDN */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
