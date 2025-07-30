<template>
  <section class="max-w-4xl mx-auto p-6">
    <DestinationNavigation />
    
    <div v-if="destination" class="space-y-6">
      <img :src="destination.image" :alt="destination.name" class="w-full h-72 object-cover rounded-xl" />

      <div>
        <h1 class="text-3xl font-bold text-gray-800">{{ destination.name }}</h1>
        <p class="text-sm text-gray-500">{{ destination.location }}</p>
      </div>

      <div class="flex items-center gap-2 text-yellow-500">
        <i class="fas fa-star" v-for="n in Math.floor(destination.rating)" :key="n"></i>
        <span class="text-sm text-gray-600">({{ destination.rating || '0.0' }})</span>
      </div>

      <p class="text-gray-700 leading-relaxed">
        {{ destination.description }}
      </p>

      <div class="text-sm text-gray-500">
        <i class="fas fa-tag text-teal-500 mr-1"></i>
        Category: {{ destination.category?.name || 'Uncategorized' }}
      </div>

      <DestinationComment :destination-id="route.params.id" />

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import DestinationComment from './DestinationComment.vue'
import DestinationNavigation from './DestinationNavigation.vue'

const route = useRoute()
const destination = ref(null)
const comments = ref([])

const fetchDestination = async () => {
  try {
    const res = await axios.get(`http://localhost:4321/api/destinations/${route.params.id}`)
    destination.value = res.data
  } catch (err) {
    console.error("Failed to fetch destination detail", err)
  }
}

const fetchComments = async () => {
  try {
    const res = await axios.get(`http://localhost:4321/api/destinations/${route.params.id}/comments`, {
      withCredentials: true
    })
    comments.value = res.data
  } catch (err) {
    console.error("Failed to fetch comments", err)
  }
}

onMounted(async () => {
  await fetchDestination()
  await fetchComments()
})
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
</style>
