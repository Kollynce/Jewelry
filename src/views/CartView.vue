<script setup>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

const cartStore = useCartStore()

const cart = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.subtotal)
const itemCount = computed(() => cartStore.itemCount)

// Shipping cost calculation (free over $100)
const shippingCost = computed(() => {
  return subtotal.value >= 100 ? 0 : 10
})

// Total cost calculation
const total = computed(() => {
  return subtotal.value + shippingCost.value
})

// Update item quantity
const updateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    cartStore.removeFromCart(productId)
  } else {
    cartStore.updateQuantity(productId, newQuantity)
  }
}

// Remove item from cart
const removeItem = (productId) => {
  cartStore.removeFromCart(productId)
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>
    
    <div v-if="cart.length === 0" class="text-center py-8 bg-gray-50 rounded">
      <p class="text-lg mb-4">Your cart is empty</p>
      <router-link to="/products" class="btn btn-primary">
        Browse Products
      </router-link>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Cart Items (2/3 width) -->
      <div class="md:col-span-2">
        <div v-for="item in cart" :key="item.id" class="flex border-b py-4">
          <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded">
          
          <div class="ml-4 flex-grow">
            <router-link :to="`/product/${item.id}`" class="text-lg font-semibold hover:text-gray-700">
              {{ item.name }}
            </router-link>
            <p class="text-gray-600">${{ item.price.toFixed(2) }} each</p>
            
            <div class="flex items-center mt-2">
              <button 
                @click="updateQuantity(item.id, item.quantity - 1)"
                class="px-2 py-1 bg-gray-200 rounded-l"
              >-</button>
              <span class="px-4 py-1 border-t border-b">{{ item.quantity }}</span>
              <button 
                @click="updateQuantity(item.id, item.quantity + 1)"
                class="px-2 py-1 bg-gray-200 rounded-r"
              >+</button>
              
              <button 
                @click="removeItem(item.id)"
                class="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
          
          <div class="text-right">
            <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>
      </div>
      
      <!-- Order Summary (1/3 width) -->
      <div class="bg-gray-50 p-6 rounded h-fit">
        <h2 class="text-xl font-bold mb-4">Order Summary</h2>
        
        <div class="flex justify-between mb-2">
          <span>Subtotal ({{ itemCount }} items)</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        
        <div class="flex justify-between mb-2">
          <span>Shipping</span>
          <span v-if="shippingCost > 0">${{ shippingCost.toFixed(2) }}</span>
          <span v-else class="text-green-600">Free</span>
        </div>
        
        <div v-if="shippingCost > 0" class="text-sm text-gray-600 mb-4">
          <p>Free shipping on orders over $100</p>
        </div>
        
        <div class="border-t pt-2 mt-2 mb-6">
          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>${{ total.toFixed(2) }}</span>
          </div>
        </div>
        
        <router-link to="/checkout" class="btn btn-primary w-full py-3 block text-center">
          Proceed to Checkout
        </router-link>
        
        <div class="mt-4">
          <router-link to="/products" class="text-blue-600 hover:underline text-center block">
            Continue Shopping
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
