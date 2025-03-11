<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center rounded transition-colors',
      {
        'bg-black text-white hover:bg-gray-800': variant === 'primary',
        'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
        'bg-white text-black border border-gray-300 hover:bg-gray-100': variant === 'outline',
        'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
        'px-3 py-1 text-sm': size === 'sm',
        'px-4 py-2': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
        'w-full': fullWidth,
        'opacity-50 cursor-not-allowed': disabled
      }
    ]"
  >
    <slot></slot>
  </button>
</template>
