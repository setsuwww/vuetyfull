<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center rounded-t-xl border-y border-gray-300"
  >
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium text-gray-900 dark:text-white">
        Welcome, <span>{{ user?.name || "Admin" }}</span>
      </span>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const user = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:4321/api/users/me", { withCredentials: true })

    user.value = res.data
  } catch (err) {
    console.error("Gagal fetch user:", err)
  }
})
</script>
