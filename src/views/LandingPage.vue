<template>
  <section class="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 text-center bg-radial from-teal-100 via-teal-50 to-white">

    <!-- Badge -->
    <div class="w-full max-w-sm mb-6 z-10 flex justify-center">
      <span class="flex items-center gap-2 px-4 py-1 text-sm font-medium bg-white text-teal-700 rounded-full shadow-sm">
        <span class="relative flex size-2">
          <span class="absolute inset-0 rounded-full bg-teal-400 opacity-75 animate-ping"></span>
          <span class="relative rounded-full bg-teal-500 size-2"></span>
        </span>
        <span class="font-semibold text-sm">Active</span>
      </span>
    </div>

    <!-- Search -->
    <div class="w-full max-w-md mb-8 z-10">
      <input v-model="search"
        type="text" placeholder="Search destinations..."
        class="w-full px-5 py-3 rounded-xl shadow-sm bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
      />
    </div>

    <!-- Heading -->
    <h1 class="text-4xl md:text-6xl font-bold text-gray-700 mb-4 z-10">
      Welcome to <span class="vuetyfull text-teal-700">Vuetyfull</span>
    </h1>

    <!-- Paragraph -->
    <p class="text-lg md:text-xl font-semibold text-gray-500 max-w-2xl mb-6 z-10">
      Your all-in-one CMS blog platform for exploring and sharing the most
      beautiful touring destinations Worldwide.
    </p>

    <!-- CTA Buttons -->
    <div class="flex items-center space-x-2 z-10">
      <button @click="goToDestination" class="px-6 py-3 font-semibold rounded-xl shadow-sm bg-white hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all">
        Destinations
      </button>
      <button @click="goToDestination" class="flex items-center gap-x-1 px-6 py-3 font-semibold rounded-xl shadow-md bg-teal-600 hover:bg-teal-700 text-white transition-all">
        <PenTool :stroke-width="1.25" class="rotate-[-90deg]"/>
        Create Blogs
      </button>
    </div>

  </section>
</template>

<script setup>
import { PenTool } from 'lucide-vue-next';
import { ref } from "vue";
import { useRouter } from "vue-router";

const search = ref("");
const router = useRouter();

function goToDestination() {
  router.push("/destinations");
}
</script>

<style>
</style>