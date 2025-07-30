<template>
  <ContentParent contentTitle="Gallery">
    <!-- Header with Search and Filter -->
    <template #searchFilter>
      <Searchfilter @search="handleSearch" @filter="selectCategory" />
    </template>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      <div v-for="item in filteredItems" :key="item.id" class="break-inside-avoid mb-4 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <!-- Image -->
        <div class="relative">
          <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover" />
          <button
            @click="toggleFavorite(item.id)"
            :title="item.isFavorite ? 'Remove from favorites' : 'Add to favorites'"
            class="absolute flex items-center top-2 right-2 p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors duration-200"
          >
            <i :class="['fas fa-heart', item.isFavorite ? 'text-red-500' : 'text-gray-400']"></i>
          </button>
        </div>

        <!-- Content Section -->
        <div class="p-4 space-y-2">
          <div>
            <h3 class="text-lg font-bold text-gray-800">{{ item.title }}</h3>
            <h4 class="text-sm font-semibold text-gray-500">{{ item.location }}</h4>
          </div>

          <!-- Action Buttons -->
          <router-link :to="`/destination/${item.id}`" class="card-link-primary">
            Read More <i class="fas fa-arrow-right ml-1"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Review Modal -->
    <GaleryReviewModal v-if="isModalOpen" :destinationId="selectedItemId" @close="closeModal" @submit="submitReview" />

</ContentParent>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Searchfilter from '../Searchfilter.vue';
import ContentParent from '../ContentParent.vue';
import GaleryReviewModal from './GaleryReviewModal.vue'; // Assuming a separate modal component

const galleryItems = ref([]);
const isModalOpen = ref(false);
const selectedItemId = ref(null);

const loadGalleryItems = async () => {
  try {
    const res = await axios.get('http://localhost:4321/api/destinations');
    galleryItems.value = res.data.map(dest => ({
      id: dest.id,
      title: dest.name,
      location: dest.location,
      category: dest.category?.name || 'Uncategorized',
      image: dest.image || '/default.jpg',
      isFavorite: false,
      showComments: false,
      visibleReviews: 3,
      reviews: Array.isArray(dest.comments)
        ? dest.comments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(c => ({
              id: c.id,
              user: { username: c.username || 'Anonymous' },
              text: c.content,
              rating: c.rating,
            }))
        : [],
    }));
  } catch (err) {
    console.error('❌ Failed to load gallery items:', err);
  }
};

onMounted(loadGalleryItems);

const searchQuery = ref('');
const selectedCategory = ref('All');

const filteredItems = computed(() => {
  return galleryItems.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === 'All' || item.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

function handleSearch(query) {
  searchQuery.value = query;
  console.log('🔍 Search:', query);
}

function selectCategory(category) {
  selectedCategory.value = category;
  console.log('📁 Category selected:', category);
}

function toggleFavorite(id) {
  const item = galleryItems.value.find(i => i.id === id);
  if (item) {
    item.isFavorite = !item.isFavorite;
    console.log('❤️ Favorite toggled:', item.title, item.isFavorite);
  }
}

function closeModal() {
  isModalOpen.value = false;
  selectedItemId.value = null;
}

async function submitReview(reviewData) {
  try {
    const response = await axios.post(`http://localhost:4321/api/destinations/${selectedItemId.value}/comments`, {
      content: reviewData.comment,
      rating: reviewData.rating,
    });
    const newReview = {
      id: response.data.id,
      user: { username: response.data.user.username },
      text: response.data.content,
      rating: response.data.rating,
    };
    const item = galleryItems.value.find(i => i.id === selectedItemId.value);
    if (item) {
      item.reviews.unshift(newReview);
      item.reviews.sort((a, b) => new Date(b.createdAt || b.id) - new Date(a.createdAt || a.id)); // Sort by creation date
    }
    closeModal();
    console.log('✅ Review submitted:', reviewData);
  } catch (err) {
    console.error('❌ Failed to submit review:', err);
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>