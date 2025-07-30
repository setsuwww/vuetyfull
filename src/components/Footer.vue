<template>
  <footer class="bg-white border-t border-gray-100 py-12">
    <div class="container mx-auto px-4">
      <nav class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <Vuetyfull/>
          <p class="text-gray-500 text-sm max-w-xs">Search and Views detail from your favorite destinations</p>
        </div>

        <!-- Product Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><router-link to="/home" class="text-gray-500 hover:text-gray-900 text-sm">Home</router-link></li>
            <li><router-link to="/destination" class="text-gray-500 hover:text-gray-900 text-sm">Destination</router-link></li>
            <li><router-link to="/category" class="text-gray-500 hover:text-gray-900 text-sm">Category</router-link></li>
            <li><router-link to="/galery" class="text-gray-500 hover:text-gray-900 text-sm">Galery</router-link></li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-2">
            <li><router-link to="#" class="text-gray-500 hover:text-gray-900 text-sm">About</router-link></li>
            <li><a href="https://ripqiisyns.vercel.app" class="text-gray-500 hover:text-gray-900 text-sm">Portofolio</a></li>
            <li><router-link to="#" class="text-gray-500 hover:text-gray-900 text-sm">Contact</router-link></li>
          </ul>
        </div>

      </nav>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">© 2025 Veutyfull. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Vuetyfull from "./Vuetyfull.vue";
</script>