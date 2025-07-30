<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
    <div class="w-full max-w-4xl bg-white rounded-xl shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-700 text-center mb-6">Add New Destination</h2>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-2 gap-x-2">
        <Input v-model="form.name"
          label="Name"
          placeholder="Enter destination name"
          required
        />
        <Input v-model="form.location"
          label="Location"
          placeholder="Enter location"
          required
        />
        </div>
        <Input v-model="form.image"
          label="Image URL"
          placeholder="Enter image URL"
        />
        <Input v-model="form.rating"
          label="Rating"
          type="number"
          step="0.1"
          placeholder="Enter rating (e.g., 4.8)"
          required
        />
        <Input v-model="form.category"
          label="Category"
          placeholder="Enter category (e.g., Beach)"
        />
        <Input v-model="form.description"
          label="Description"
          placeholder="Enter description"
          type="textarea"
        />
        <button
          type="submit"
          class="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Add Destination
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Input from '@/components/ui/Input.vue';

const form = ref({
  name: '',
  location: '',
  image: '',
  rating: '',
  category: '',
  description: '',
});

const submitForm = async () => {
  try {
    await axios.post('http://localhost:4321/api/destinations', {
      ...form.value,
      rating: parseFloat(form.value.rating),
    });
    alert('Destination added!');
    form.value = {
      name: '',
      location: '',
      image: '',
      rating: '',
      category: '',
      description: '',
    };
  } catch (error) {
    console.error('Error adding destination:', error);
  }
};
</script>

<style scoped>
/* Scoped styles for AddDestination.vue */
</style>