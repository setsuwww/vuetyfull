<template>
  <section class="p-6 md:p-12 bg-gray-50">
    
    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
      {{ contentTitle }}
    </h1>

    <slot name="searchFilter" />

    <main>
      <slot />
    </main>
  </section>
</template>

<script setup>
defineProps({
  contentTitle: String,
})
</script>