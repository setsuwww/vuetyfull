<template>
  <div class="relative inline-block">
    <!-- Dropdown Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
    >
      <span class="text-gray-600 font-medium">{{ selectedItem || placeholder }}</span>
      <i class="fas fa-chevron-down text-gray-400" :class="{ 'rotate-180': isOpen }"></i>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-20 border border-gray-100 overflow-hidden">
      <ul class="py-1">
        <li v-for="item in items" :key="item.value" @click="selectItem(item)"
          class="px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 cursor-pointer transition-colors duration-200"
        >
          <a class="block w-full h-full">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
    validator: items => items.every(item => 'label' in item && 'value' in item),
  },
  placeholder: {
    type: String,
    default: 'Select an item',
  },
});

defineEmits(['select']);

const isOpen = ref(false);
const selectedItem = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectItem(item) {
  selectedItem.value = item.label;
  isOpen.value = false;
  emit('select', item.value);
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>