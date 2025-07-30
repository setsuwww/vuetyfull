<template>
  <header class="py-4 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Search Bar -->
      <div class="w-full sm:w-1/2 lg:w-1/3">
        <div class="relative">
          <input v-model="search" @input="handleSearch"
            type="text"
            placeholder="Search destinations..."
            class="w-full p-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>
      </div>

      <!-- Filter Dropdown -->
      <div class="relative">
        <button @click="toggleDropdown"
          class="flex items-center space-x-2 px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all">
          <span class="text-gray-800 font-medium">
            Filtered :
            <span class="text-gray-500">{{ selected || 'Filter by Category' }}</span>
          </span>
          <i class="fas fa-chevron-down text-gray-400"></i>
        </button>

        <div v-if="isOpen"
          class="absolute mt-2 w-48 bg-white rounded-xl shadow-lg z-20 border border-gray-100">
          <ul class="py-2">
            <li v-for="category in categories" :key="category.id" @click="chooseCategory(category.name)"
              class="px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 cursor-pointer transition-colors duration-200"
            >
              {{ category.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps({
  categories: Array
})

const emit = defineEmits(['filter'])

const search = ref('')
const selected = ref('All')
const isOpen = ref(false)

function handleSearch() {
  emit('search', search.value)
}

function chooseCategory(category) {
  selected.value = category
  isOpen.value = false
  emit('filter', category)
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
