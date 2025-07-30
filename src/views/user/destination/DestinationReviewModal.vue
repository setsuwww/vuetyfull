<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="emit('close')">
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Add a Review to </h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Rating -->
        <div>
          <label class="block text-sm font-medium text-gray-600">Rating</label>
          <div class="flex space-x-1 mt-1">
            <i v-for="n in 5" :key="n" :class="['fas fa-star cursor-pointer',
                n <= rating ? 'text-yellow-500' : 'text-gray-300'
              ]" 
              @click="rating = n"
            ></i>
          </div>
        </div>

        <!-- Comment -->
        <div>
          <label class="block text-sm font-medium text-gray-600">Comment</label>
          <textarea v-model="comment" placeholder="Write your review..."
            class="w-full px-3 py-2 mt-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            rows="4"
          ></textarea>
        </div>

        <!-- Actions -->
        <div class="flex justify-end space-x-2">
          <button type="button" @click="emit('close')"
            class="px-4 py-2 font-semibold rounded-xl shadow-sm bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
          >
            Cancel
          </button>
          <button type="submit"
            class="px-4 py-2 text-white font-semibold rounded-xl bg-teal-600 hover:bg-teal-800 border border-teal-600 hover:border-teal-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  destinationId: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['close', 'submit']);

const comment = ref('');
const rating = ref(0);
const destinationId = props.destinationId

async function handleSubmit() {
  if (rating.value > 0 && comment.value.trim()) {
    try {
      const userId = 1;
      console.log('Submitting to:', `/api/destinations/${destinationId}/comments`);
      const response = await axios.post(
        `/api/destinations/${destinationId}/comments`,
        {
          content: comment.value.trim(),
          rating: rating.value,
          userId,
        },
        { withCredentials: true }
      );
      emit('submit', {
        comment: comment.value.trim(),
        rating: rating.value,
      });
      rating.value = 0;
      comment.value = '';
      alert('Review berhasil dikirim!');
    } catch (err) {
      console.error('Submit Error:', err.response?.status, err.response?.data);
      alert(`Gagal mengirim review: ${err.message}`);
    }
  } else {
    alert('Harap masukkan rating dan komentar!');
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
