<template>
  <div>
    <h2 class="text-xl font-semibold mt-8 mb-4 text-gray-800">Comments</h2>
    <div v-if="comments.length > 0" class="space-y-4">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
      >
        <!-- Ikon -->
        <div class="text-gray-600 bg-gray-200 rounded-full p-2 h-fit">
          <CircleUserRound :size="20" :stroke-width="1.5" />
        </div>

        <!-- Konten Komentar -->
        <div class="flex-1 flex flex-col">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <span class="font-bold text-sm text-gray-800">{{ comment.user?.username || 'Anonymous' }}</span>
            <span class="text-sm text-gray-500 ml-auto">
              {{ new Date(comment.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}
            </span>
          </div>

          <!-- Rating -->
          <div class="flex items-center mt-1">
            <i v-for="n in comment.rating" :key="n" class="fas fa-star text-yellow-500 text-xs"></i>
            <span class="ml-2 text-xs text-gray-500">({{ comment.rating }})</span>
          </div>

          <!-- Isi Komentar -->
          <p class="text-sm font-semibold text-gray-500 mt-2">{{ comment.content }}</p>
        </div>
      </div>
    </div>
    <p v-else class="text-gray-500 text-sm italic">Belum ada komentar. Jadilah yang pertama berkomentar!</p>
  </div>
</template>


<script setup>
import { CircleUserRound } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  destinationId: {
    type: [String, Number],
    required: true,
  },
});

const comments = ref([]);

const fetchComments = async () => {
  try {
    const res = await axios.get(`/api/destinations/${props.destinationId}/comments`, {
      withCredentials: true,
    });
    comments.value = res.data;
  } catch (err) {
    console.error('Failed to fetch comments', err.response?.status, err.response?.data);
  }
};

onMounted(fetchComments);
</script>