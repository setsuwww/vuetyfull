<template>
  <p class="text-center font-semibold text-sm text-gray-600">
    {{ label }}
    <router-link :to="link" class="text-teal-600 hover:text-teal-700 font-medium">
      {{ text }}
    </router-link>
  </p>
</template>

<script setup>
defineProps({
  label: String,
  link: String,
  text: String
})
</script>