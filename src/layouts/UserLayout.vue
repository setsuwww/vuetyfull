<template>
  <div>
    <Navbar />
    <main class="min-h-screen bg-gray-50 mt-16">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
