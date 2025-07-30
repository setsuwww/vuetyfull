<template>
  <div class="w-full">
    <label :for="id" class="block text-sm font-semibold text-gray-600 mb-2">{{ label }}</label>
    <div class="relative">
      <slot name="icon" />
      <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        :class="[
          'px-4 py-1 w-full rounded-lg border transition-all focus:outline-none focus:ring-2 placeholder:text-sm placeholder-gray-400',
          icon ? 'pl-10' : '',
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-teal-500',
          customClass
        ]"
      />
    </div>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: [String, Number],
  error: { type: String, default: '' },
  icon: { type: Boolean, default: false },
  customClass: { type: String, default: '' } // custom class dari luar
})

defineEmits(['update:modelValue'])
</script>
