<script setup>
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
    <h3 class="font-medium mb-3">Categories</h3>
    
    <ul class="space-y-2">
      <li>
        <button 
          @click="selectCategory('')"
          :class="[
            'text-left w-full hover:text-gray-800',
            { 'font-semibold': selectedCategory === '' }
          ]"
        >
          All Products
        </button>
      </li>
      
      <li v-for="category in categories" :key="category.id">
        <button 
          @click="selectCategory(category.id)"
          :class="[
            'text-left w-full hover:text-gray-800',
            { 'font-semibold': selectedCategory === category.id }
          ]"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
