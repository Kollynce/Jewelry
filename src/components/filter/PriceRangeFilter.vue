<script setup>
import { ref, watch } from 'vue'
import { Button } from '@headlessui/vue'

const props = defineProps({
  minPrice: {
    type: Number,
    default: 0
  },
  maxPrice: {
    type: Number,
    default: 10000
  },
  initialMin: {
    type: Number,
    default: 0
  },
  initialMax: {
    type: Number,
    default: 10000
  }
})

const emit = defineEmits(['update:range'])

const min = ref(props.initialMin)
const max = ref(props.initialMax)

const applyFilter = () => {
  // Make sure min is not greater than max
  if (min.value > max.value) {
    min.value = max.value
  }
  
  emit('update:range', { min: min.value, max: max.value })
}

// Watch for props changes to sync with parent
watch(() => props.initialMin, (newVal) => {
  min.value = newVal
})

watch(() => props.initialMax, (newVal) => {
  max.value = newVal
})
</script>

<template>
  <div>
    <h3 class="font-medium mb-3">Price Range</h3>
    
    <div class="grid grid-cols-2 gap-2 mb-4">
      <div>
        <label class="text-sm text-gray-600 block">Min</label>
        <div class="relative">
          <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input 
            type="number"
            v-model="min"
            :min="minPrice"
            :max="maxPrice"
            class="form-input pl-6"
          />
        </div>
      </div>
      
      <div>
        <label class="text-sm text-gray-600 block">Max</label>
        <div class="relative">
          <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input 
            type="number"
            v-model="max"
            :min="minPrice"
            :max="maxPrice"
            class="form-input pl-6"
          />
        </div>
      </div>
    </div>
    
    <Button @click="applyFilter" class="btn btn-primary w-full">
      Apply Filter
    </Button>
  </div>
</template>
