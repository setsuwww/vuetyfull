<template>
  <ContentParent contentTitle="Destinations">

    <template #searchFilter>
      <Searchfilter :categories="categories"
        @search="handleSearch"
        @filter="selectCategory"
      />
    </template>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      <div v-for="destination in filteredDestinations.slice(0, visibleCount)" :key="destination.id" class="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <!-- Image -->
        <div class="relative">
          <img :src="destination.image" :alt="destination.name" class="w-full h-56 object-cover transition-transform duration-200"/>

          <button @click="toggleFavorite(destination.id)"
            :title="destination.isFavorite
                ? 'Remove from favorites'
                : 'Add to favorites'
            " class="absolute top-3 right-3">

            <div class="flex items-center p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors duration-200">
              <i :class="['fas fa-heart',
                  destination.isFavorite ? 'text-red-500' : 'text-gray-400',
                ]"
              ></i>
            </div>
          </button>
        </div>

        <!-- Card Content -->
        <div class="p-6 space-y-3">
          <div class="flex justify-between items-start">
            <div>
              <h2 class="text-xl font-bold text-gray-800">
                {{ destination.name }}
              </h2>
              <p class="text-sm text-gray-500">{{ destination.location }}</p>
            </div>
            <div class='flex items-center space-x-1 py-1 px-2 rounded-full border bg-yellow-50 border-yellow-100'>
              <div class="flex">
                <i v-for="star in 1" :key="star" :class="['fas',
                    destination.rating
                      ? star <= Math.floor(destination.rating)
                        ? 'fa-star text-yellow-500'
                          : star === Math.ceil(destination.rating) && destination.rating % 1 >= 0.5
                        ? 'fa-star-half-alt text-yellow-500'
                          : 'fa-star text-yellow-500'
                            : 'fa-star text-yellow-300',
                  ]"
                ></i>
              </div>
              <span class='text-sm text-yellow-500'>
                {{ destination.rating ? destination.rating.toFixed(1) : "5.0" }}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-sm line-clamp-2">
            {{ destination.description }}
          </p>

          <!-- Category -->
          <div class="flex items-center text-center space-x-1 text-sm text-gray-500">
            <font-awesome-icon icon="fa-solid fa-tag" class="text-teal-500" />
            <span>{{ destination.category?.name || 'All' }}</span>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-between space-x-4">
            <button @click="openReviewForm(destination.id)" class="text-sky-600 font-medium text-sm transition-colors duration-200">
              Review
            </button>
            <router-link :to="`/destination/${destination.id}`" class="inline-block text-teal-600 hover:text-teal-700 font-bold text-sm transition-colors duration-200">
              View Details <i class="fas fa-arrow-right ml-1"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 text-center" v-if="visibleCount < filteredDestinations.length">
      <button @click="showMore" class="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors duration-200">
        Show More
      </button>
    </div>

    <DestinationReviewModal v-if="isReviewOpen" :destination-id="selectedDestinationId" @close="closeReviewForm" @submit="closeReviewForm" />
  </ContentParent>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Searchfilter from "../Searchfilter.vue";
import ContentParent from "../ContentParent.vue";
import DestinationReviewModal from "./DestinationReviewModal.vue";
import axios from "axios";

const destinations = ref([]);
const categories = ref([]);
const visibleCount = ref(4);
const favoriteDestinations = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("All");
const selectedDestinationId = ref(null)
const isReviewOpen = ref(false)

function openReviewForm(id) {
  selectedDestinationId.value = id
  isReviewOpen.value = true
}

function closeReviewForm() {
  isReviewOpen.value = false
}

const fetchDestinations = async () => {
  try {
    const res = await axios.get("http://localhost:4321/api/destinations");
    destinations.value = res.data.map((item) => ({
      ...item,
      isFavorite: false,
      rating:
        item.ratings && item.ratings.length
          ? (
              item.ratings.reduce((sum, rating) => sum + rating, 0) /
              item.ratings.length
            ).toFixed(1)
          : 0,
    }));
  } catch (err) {
    console.error("Failed to fetch destinations", err);
  }
};

const fetchCategories = async () => {
  try {
    const res = await axios.get("http://localhost:4321/api/categories")
    categories.value = [{ name: 'All' }, ...res.data]
  } catch (err) {
    console.error("Failed to fetch categories", err)
  }
}

onMounted(() => {
  fetchCategories()
  fetchDestinations()
})

const filteredDestinations = computed(() => {
  let items = destinations.value;

  if (searchQuery.value) {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  if (selectedCategory.value !== "All") {
    items = items.filter(
      (item) => item.category?.name?.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

  return items;
});

function showMore() {
  visibleCount.value += 4;
}

function toggleFavorite(id) {
  if (favoriteDestinations.value.includes(id)) {
    favoriteDestinations.value = favoriteDestinations.value.filter(
      (favId) => favId !== id
    );
    destinations.value.find((dest) => dest.id === id).isFavorite = false;
  } else {
    favoriteDestinations.value.push(id);
    destinations.value.find((dest) => dest.id === id).isFavorite = true;
  }
}

function handleSearch(query) {
  searchQuery.value = query;
  console.log("Searching for:", query);
}

function selectCategory(category) {
  selectedCategory.value = category;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(fetchDestinations);
</script>