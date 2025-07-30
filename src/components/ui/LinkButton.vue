<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  to: String,
  variant: {
    type: String,
    default: 'secondary',
  },
})

const router = useRouter()

const classes = computed(() => {
  return {
    primary: 'bg-teal-600 text-white border-teal-600 hover:bg-teal-700 hover:border-teal-700 transition-colors duration-200',
    secondary: 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100',
  }[props.variant]
})

const handleClick = () => {
  if (props.to) router.push(props.to)
}
</script>

<template>
  <button @click="handleClick" :class="classes" class="flex items-center tracking-wide font-semibold px-4 py-1 rounded-xl border">
    <slot />
  </button>
</template>

