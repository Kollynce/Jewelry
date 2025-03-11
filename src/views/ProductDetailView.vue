<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { firebaseService } from '../services/firebaseService'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const cartStore = useCartStore()
const product = ref(null)
const loading = ref(true)
const error = ref(null)
const quantity = ref(1)

const productId = computed(() => route.params.id)

onMounted(async () => {
  try {
    product.value = await firebaseService.getProduct(productId.value)
  } catch (err) {
    error.value = err.message || 'Failed to load product'
  } finally {
    loading.value = false
  }
})

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value)
    alert(`${quantity.value} ${product.value.name}${quantity.value > 1 ? 's' : ''} added to cart!`)
  }
}
</script>

<template>
  <div>
    <div v-if="loading" class="text-center py-8">
      <p>Loading product...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-100 p-4 rounded mb-6">
      <p class="text-red-700">{{ error }}</p>
    </div>
    
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img :src="product.image" :alt="product.name" class="w-full rounded-lg">
      </div>
      
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
        <p class="text-2xl text-gray-700 mb-4">${{ product.price.toFixed(2) }}</p>
        
        <div class="mb-6" v-if="product.description">
          <h2 class="text-xl font-semibold mb-2">Description</h2>
          <p>{{ product.description }}</p>
        </div>
        
        <div class="mb-6">
          <label for="quantity" class="block mb-2">Quantity:</label>
          <div class="flex">
            <button 
              @click="quantity > 1 ? quantity-- : null"
              class="px-4 py-2 bg-gray-200 rounded-l"
            >-</button>
            <input 
              id="quantity" 
              v-model="quantity" 
              type="number" 
              min="1" 
              class="w-16 text-center border-t border-b"
            >
            <button 
              @click="quantity++"
              class="px-4 py-2 bg-gray-200 rounded-r"
            >+</button>
          </div>
        </div>
        
        <button @click="addToCart" class="btn btn-primary w-full py-3 mb-4">
          Add to Cart
        </button>
        
        <div v-if="product.features" class="mt-8">
          <h2 class="text-xl font-semibold mb-2">Features</h2>
          <ul class="list-disc list-inside">
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-8">
      <p>Product not found.</p>
    </div>
  </div>
</template>
