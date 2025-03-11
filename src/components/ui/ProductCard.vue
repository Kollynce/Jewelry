<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.product, 1)
}
</script>

<template>
  <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <router-link :to="`/product/${product.id}`">
      <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
    </router-link>
    <div class="p-4">
      <router-link :to="`/product/${product.id}`">
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
      </router-link>
      <p class="text-gray-500 mb-4">${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart" class="btn btn-primary w-full">Add to Cart</button>
    </div>
  </div>
</template>
