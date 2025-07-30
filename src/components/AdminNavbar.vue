<template>
  <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center rounded-t-xl border-y-1 border-gray-300">
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        Welcome, <span>{{ user?.name || 'Admin' }}</span>
      </span>
    </div>
  </header>
</template>

<script setup>
</script>