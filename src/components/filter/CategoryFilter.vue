<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:category'])

const selectCategory = (category) => {
  emit('update:category', category)
}
</script>

<template>
  <div>
    <RadioGroupLabel class="font-medium mb-3">Categories</RadioGroupLabel>
    
    <RadioGroup :value="selectedCategory" @change="selectCategory" class="space-y-2">
      <RadioGroupOption v-slot="{ checked }" :value="''">
        <button 
          class="text-left w-full text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
          :class="{ 'font-semibold text-light-text-primary dark:text-dark-text-primary': checked }"
        >
          All Products
        </button>
      </RadioGroupOption>
      
      <RadioGroupOption 
        v-for="category in categories" 
        :key="category.id"
        v-slot="{ checked }"
        :value="category.id"
      >
        <button 
          class="text-left w-full text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
          :class="{ 'font-semibold text-light-text-primary dark:text-dark-text-primary': checked }"
        >
          {{ category.name }}
        </button>
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>
