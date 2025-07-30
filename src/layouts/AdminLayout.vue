<template>
    <div className="flex h-screen border-l-1 border-gray-300">
      <AdminSidebard />
      <div className="flex-1 flex flex-col pl-4 pt-6 pr-2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200">
        <AdminNavbar />
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-auto">
          <div className="p-2">
            <slot />
          </div>
        </main>
      </div>
    </div>
</template>

<script setup>
import AdminNavbar from '../components/AdminNavbar.vue'
import AdminSidebard from '../components/AdminSidebard.vue';
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>