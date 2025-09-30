<template>
  <ContentParent contentTitle="Contact & Feedback">
    <section class="relative w-full flex items-center justify-center py-16 px-6">
      <!-- Background Cards -->
      <div
        class="absolute inset-0 flex flex-wrap gap-8 justify-center items-center opacity-30 pointer-events-none"
      >
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-8 w-72 rotate-[-2deg]"
        >
          <p class="text-gray-500 text-base">
            "Vuetyfull really helps me manage projects efficiently."
          </p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-10 w-80 rotate-[3deg]"
        >
          <p class="text-gray-500 text-base">
            "Great UI and clean code structure. Highly recommend!"
          </p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-xl p-6 w-64 rotate-[1deg]"
        >
          <p class="text-gray-500 text-sm">"The design is minimal yet powerful."</p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-xl p-6 w-64 rotate-[-4deg] hidden md:block"
        >
          <p class="text-gray-500 text-sm">"Easy to customize and extend."</p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-8 w-72 rotate-[6deg] hidden lg:block"
        >
          <p class="text-gray-500 text-base">
            "Documentation is super clear and simple."
          </p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-10 w-80 rotate-[-5deg] hidden lg:block"
        >
          <p class="text-gray-500 text-base">
            "Made my workflow so much smoother."
          </p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-6 w-64 rotate-[4deg] hidden xl:block"
        >
          <p class="text-gray-500 text-sm">"Modern and fresh UI kit."</p>
        </div>
        <div
          class="bg-white border border-gray-200 shadow-md rounded-2xl p-8 w-72 rotate-[-1deg] hidden xl:block"
        >
          <p class="text-gray-500 text-base">
            "Integration was a breeze, love it!"
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <form
        class="relative z-10 w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-10 space-y-6"
      >
        <!-- Title -->
        <h4 class="mb-4 text-gray-700 font-bold text-3xl text-center">
          Send me a message
        </h4>

        <!-- Username -->
        <div>
          <label for="username" class="block text-gray-700 font-medium mb-1">
            Username <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Send Feedback
          </button>
        </div>
      </form>
    </section>
  </ContentParent>
</template>

<script setup>
import ContentParent from "../ContentParent.vue";
</script>
