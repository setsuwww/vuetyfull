<template>
  <ContentParent contentTitle="About Vuetyfull">
    <section
      class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- Kiri -->
      <div class="space-y-6">
        <span
          class="inline-block text-white bg-teal-900 px-4 py-1 rounded-full border border-teal-800 text-sm"
        >
          What is Vuetyfull
        </span>

        <div class="flex flex-col max-w-xl">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
            See more information about, & get more closer to
          </h1>
          <span
            class="text-3xl md:text-4xl font-extrabold text-teal-700 mt-2 border-b-2 border-teal-500 pb-2 vuetyfull"
          >
            Vuetyfull
          </span>
        </div>

        <article class="space-y-4">
          <p
            class="bg-white border border-gray-200 rounded-xl p-4 text-base md:text-lg text-gray-600 shadow-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            iure, perspiciatis dolores ipsam temporibus beatae aspernatur.
            Consequuntur quisquam vero voluptatibus dolore nam sit, et
            necessitatibus, quo illo repellat minima quaerat.
          </p>
          <p
            class="bg-white border border-gray-200 rounded-xl p-4 text-base md:text-lg text-gray-600 shadow-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            iure, perspiciatis dolores ipsam temporibus beatae aspernatur.
            Consequuntur quisquam vero voluptatibus dolore nam sit, et
            necessitatibus, quo illo repellat minima quaerat.
          </p>
        </article>
      </div>

      <!-- Kanan -->
      <article class="space-y-4">
        <h3 class="text-xl font-bold text-yellow-500">
          Still active until now
        </h3>
        <p
          class="border-l-4 border-t-2 border-dashed border-yellow-200 p-4 text-base md:text-lg text-gray-600 bg-white rounded-lg shadow-sm"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          nulla! Mollitia, sequi in maxime laboriosam, delectus dicta quia,
          optio dolore obcaecati doloribus culpa voluptate odio? Pariatur
          commodi repellat excepturi eum.
        </p>
        <p
          class="border-l-4 border-t-2 border-dashed border-yellow-200 p-4 text-base md:text-lg text-gray-600 bg-white rounded-lg shadow-sm"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          nulla! Mollitia, sequi in maxime laboriosam, delectus dicta quia,
          optio dolore obcaecati doloribus culpa voluptate odio? Pariatur
          commodi repellat excepturi eum.
        </p>
      </article>
    </section>
  </ContentParent>
</template>

<script setup>
import ContentParent from "../ContentParent.vue";
</script>
