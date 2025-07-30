<template>
  <div class="flex items-center justify-between">
    <button @click="router.back()" class="text-base font-semibold text-teal-600 mb-4">&larr; Back</button>
    <button @click="nextDestination" class="text-base font-semibold text-teal-600 mb-4">Next &rarr;</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const nextDestination = () => {
  const currentId = parseInt(route.params.id)
  router.push({ name: 'DestinationDetail', params: { id: currentId + 1 } })
}
</script>
