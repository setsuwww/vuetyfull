<!-- src/components/BaseButton.vue -->
<template>
  <button :type="type" :class="['inline-flex items-center justify-center rounded-lg font-medium transition duration-200 focus:outline-none',
      sizeClass, variantClass,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]" :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const sizeClass = computed(() => {
  return {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }[props.size]
})

const variantClass = computed(() => {
  return {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100'
  }[props.variant]
})
</script>

<style scoped>
/* Opsional: tambahan efek jika kamu mau */
</style>
