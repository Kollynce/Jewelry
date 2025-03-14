<template>
  <div class="bg-light-primary dark:bg-dark-primary min-h-screen pb-16">
    <!-- Page header -->
    <div class="bg-light-secondary dark:bg-dark-secondary shadow-sm py-6 mb-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">Checkout</h1>

        <!-- Checkout progress indicator -->
        <div class="mt-4 hidden sm:block">
          <div class="flex items-center">
            <div class="flex-1">
              <div class="flex items-center">
                <div class="bg-accent-primary rounded-full h-8 w-8 flex items-center justify-center">
                  <span class="text-white font-medium text-sm">1</span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-accent-primary">Shopping cart</p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center relative">
                <div class="h-0.5 flex-1 bg-accent-primary"></div>
                <div class="bg-accent-primary rounded-full h-8 w-8 flex items-center justify-center">
                  <span class="text-white font-medium text-sm">2</span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-accent-primary">Checkout</p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center">
                <div class="h-0.5 flex-1 bg-light-neutral-300 dark:bg-dark-neutral-700"></div>
                <div class="bg-light-neutral-300 dark:bg-dark-neutral-700 rounded-full h-8 w-8 flex items-center justify-center">
                  <span class="text-white font-medium text-sm">3</span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success message -->
    <div v-if="successMsg" class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-light-secondary dark:bg-dark-secondary shadow-lg rounded-lg overflow-hidden">
        <div class="bg-green-50 dark:bg-green-900 p-6 sm:p-10 text-center">
          <div class="flex justify-center mb-5">
            <div class="rounded-full bg-green-100 dark:bg-green-800 p-3">
              <svg class="h-10 w-10 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Order Placed Successfully!</h2>
          <p class="text-green-700 dark:text-green-300 text-lg">{{ successMsg }}</p>
          <p class="mt-4 text-light-text-secondary dark:text-dark-text-secondary">Redirecting to your account page...</p>
          <div class="mt-8 flex justify-center">
            <router-link to="/account" class="px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-md transition-all">
              View order details
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Error message -->
    <div v-else-if="errorMsg" class="container mx-auto px-4 mb-8">
      <div class="max-w-3xl mx-auto bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 p-4 rounded-lg flex items-start">
        <div class="flex-shrink-0 mt-0.5">
          <svg class="h-5 w-5 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-red-700 dark:text-red-300 font-medium">{{ errorMsg }}</p>
        </div>
        <button @click="errorMsg = ''" class="ml-auto text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Main checkout content -->
    <div v-else class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <!-- Checkout form (2/3 width) -->
        <div class="lg:col-span-2">
          <form @submit.prevent="placeOrder">
            <!-- Shipping Information -->
            <div class="bg-light-secondary dark:bg-dark-secondary shadow rounded-lg overflow-hidden mb-8">
              <div class="bg-light-neutral-100 dark:bg-dark-neutral-800 py-4 px-6 border-b border-light-neutral-200 dark:border-dark-neutral-700">
                <div class="flex items-center">
                  <div class="bg-accent-primary rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">Shipping Information</h2>
                </div>
              </div>

              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">First Name</label>
                    <input
                      v-model="shippingInfo.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Last Name</label>
                    <input
                      v-model="shippingInfo.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Email</label>
                    <input
                      v-model="shippingInfo.email"
                      type="email"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Phone</label>
                    <input
                      v-model="shippingInfo.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Address</label>
                  <input
                    v-model="shippingInfo.address"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                  >
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">City</label>
                    <input
                      v-model="shippingInfo.city"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">State</label>
                    <input
                      v-model="shippingInfo.state"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">ZIP Code</label>
                    <input
                      v-model="shippingInfo.zipCode"
                      type="text"
                      required
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                    >
                  </div>
                </div>

                <div class="mt-6">
                  <div class="flex items-center">
                    <input
                      id="save-info"
                      type="checkbox"
                      v-model="saveInfo"
                      class="h-4 w-4 text-accent-primary focus:ring-accent-primary border-light-neutral-300 dark:border-dark-neutral-600 rounded"
                    >
                    <label for="save-info" class="ml-2 block text-sm text-light-text-primary dark:text-dark-text-primary">
                      Save this information for next time
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Information -->
            <div class="bg-light-secondary dark:bg-dark-secondary shadow rounded-lg overflow-hidden mb-8">
              <div class="bg-light-neutral-100 dark:bg-dark-neutral-800 py-4 px-6 border-b border-light-neutral-200 dark:border-dark-neutral-700">
                <div class="flex items-center">
                  <div class="bg-accent-primary rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">Payment Information</h2>
                </div>
              </div>

              <div class="p-6">
                <div class="mb-8">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Accepted Cards</p>
                    <div class="flex space-x-2">
                      <div class="h-8 w-12 rounded border bg-light-neutral-100 dark:bg-dark-neutral-800 flex items-center justify-center">
                        <span class="text-xs font-bold text-blue-700">VISA</span>
                      </div>
                      <div class="h-8 w-12 rounded border bg-light-neutral-100 dark:bg-dark-neutral-800 flex items-center justify-center">
                        <span class="text-xs font-bold text-red-700">MC</span>
                      </div>
                      <div class="h-8 w-12 rounded border bg-light-neutral-100 dark:bg-dark-neutral-800 flex items-center justify-center">
                        <span class="text-xs font-bold text-blue-900">AMEX</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Name on Card</label>
                  <input
                    v-model="paymentInfo.cardName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                  >
                </div>

                <div class="mb-6">
                  <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Card Number</label>
                  <div class="relative">
                    <input
                      v-model="paymentInfo.cardNumber"
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                      v-mask="'#### #### #### ####'"
                    >
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-light-neutral-400 dark:text-dark-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">Expiration Date</label>
                    <input
                      v-model="paymentInfo.expirationDate"
                      type="text"
                      required
                      placeholder="MM/YY"
                      class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                      v-mask="'##/##'"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary mb-1">CVV</label>
                    <div class="relative">
                      <input
                        v-model="paymentInfo.cvv"
                        type="text"
                        required
                        placeholder="123"
                        class="w-full px-4 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 
    bg-light-secondary dark:bg-dark-secondary
    text-light-text-primary dark:text-dark-text-primary
    rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary 
    outline-none transition-all"
                        v-mask="'###'"
                        maxlength="3"
                      >
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          @click="showCvvHelp = !showCvvHelp"
                          class="text-light-neutral-400 dark:text-dark-neutral-600 hover:text-light-neutral-500 dark:hover:text-dark-neutral-500 focus:outline-none"
                        >
                          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div v-if="showCvvHelp" class="mt-1 text-sm text-light-neutral-500 dark:text-dark-neutral-500">
                      The CVV is a 3-digit security code found on the back of your card.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-accent-primary hover:bg-accent-secondary text-white text-lg font-medium rounded-md transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary"
              :class="{'opacity-75 cursor-not-allowed': loading}"
              :disabled="loading"
            >
              <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ loading ? 'Processing...' : `Complete Order - $${total.toFixed(2)}` }}
            </button>
          </form>
        </div>

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <div class="bg-light-secondary dark:bg-dark-secondary shadow rounded-lg overflow-hidden sticky top-6">
            <div class="bg-light-neutral-100 dark:bg-dark-neutral-800 py-4 px-6 border-b border-light-neutral-200 dark:border-dark-neutral-700">
              <h2 class="text-lg font-bold text-light-text-primary dark:text-dark-text-primary">Order Summary</h2>
            </div>

            <div class="px-6 py-4">
              <div class="flow-root">
                <ul class="-my-4 divide-y divide-light-neutral-200 dark:divide-dark-neutral-700">
                  <li v-for="item in cart" :key="item.id" class="py-4 flex">
                    <div class="flex-shrink-0 w-16 h-16 border border-light-neutral-200 dark:border-dark-neutral-700 rounded-md overflow-hidden">
                      <img :src="item.imageUrl || item.image || 'https://placehold.co/64'" :alt="item.name" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="ml-4 flex-1 flex flex-col">
                      <div>
                        <div class="flex justify-between text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                          <h3>{{ item.name }}</h3>
                          <p class="ml-4">${{ (item.price * item.quantity).toFixed(2) }}</p>
                        </div>
                        <p class="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          {{ item.category || 'Jewelry' }}
                        </p>
                      </div>
                      <div class="flex-1 flex items-end justify-between text-sm">
                        <p class="text-light-text-secondary dark:text-dark-text-secondary">Qty {{ item.quantity }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="border-t border-light-neutral-200 dark:border-dark-neutral-700 px-6 py-4 space-y-3">
              <div class="flex justify-between text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <p>Subtotal</p>
                <p>${{ subtotal.toFixed(2) }}</p>
              </div>

              <div class="flex justify-between text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <p>Shipping</p>
                <p v-if="shippingCost > 0">${{ shippingCost.toFixed(2) }}</p>
                <p v-else class="text-green-600 dark:text-green-400">Free</p>
              </div>

              <div class="flex justify-between text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <p>Taxes (estimated)</p>
                <p>${{ (subtotal * 0.08).toFixed(2) }}</p>
              </div>

              <div class="pt-3 border-t border-light-neutral-200 dark:border-dark-neutral-700">
                <div class="flex justify-between text-base font-medium text-light-text-primary dark:text-dark-text-primary">
                  <p>Total</p>
                  <p>${{ (total + (subtotal * 0.08)).toFixed(2) }}</p>
                </div>
                <p class="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">Shipping and taxes calculated at checkout</p>
              </div>
            </div>

            <div class="px-6 pb-6 pt-2">
              <div class="mt-2">
                <div class="border border-light-neutral-300 dark:border-dark-neutral-600 rounded-md p-4 bg-light-neutral-100 dark:bg-dark-neutral-800">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm text-light-text-primary dark:text-dark-text-primary">
                        <strong>Secure checkout</strong> - Your payment information is protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex justify-center">
                <div class="flex items-center space-x-2">
                  <svg class="h-5 w-5 text-light-neutral-400 dark:text-dark-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span class="text-xs text-light-text-secondary dark:text-dark-text-secondary">SSL Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'
import { firebaseService } from '../services/firebaseService'

// Remove the conflicting import and implement the directive locally
// import { vMask } from "@vuelidate/validators"

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const userProfile = ref(null)
const showCvvHelp = ref(false)
const saveInfo = ref(true)

// Form data
const shippingInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  sameAsBilling: true
})

const paymentInfo = ref({
  cardName: '',
  cardNumber: '',
  expirationDate: '',
  cvv: ''
})

// Cart calculations
const cart = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.subtotal)
const shippingCost = computed(() => subtotal.value >= 100 ? 0 : 10)
const total = computed(() => subtotal.value + shippingCost.value)

// Load user profile data if logged in
onMounted(async () => {
  if (authStore.user) {
    try {
      const profile = await firebaseService.getUserProfile(authStore.user.uid)
      userProfile.value = profile

      if (profile) {
        shippingInfo.value = {
          ...shippingInfo.value,
          firstName: profile.firstName || '',
          lastName: profile.lastName || '',
          email: profile.email || authStore.user.email,
          phone: profile.phone || '',
          address: profile.address || ''
        }
      }
    } catch (error) {
      console.error('Error loading user profile:', error)
    }
  } else {
    // Redirect if not logged in
    router.push('/login?redirect=checkout')
  }

  // Redirect if cart is empty
  if (cart.value.length === 0) {
    router.push('/cart')
  }
})

// Submit order
const placeOrder = async () => {
  loading.value = true
  errorMsg.value = ''

  // Basic validation
  if (cart.value.length === 0) {
    errorMsg.value = 'Your cart is empty'
    loading.value = false
    return
  }

  try {
    const timestamp = new Date()
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`

    // Create order in Firestore
    const orderData = {
      userId: authStore.user.uid,
      orderNumber: orderNumber,
      items: cart.value,
      subtotal: subtotal.value,
      shipping: shippingCost.value,
      total: total.value,
      shippingInfo: {
        ...shippingInfo.value
      },
      // Store minimal payment info for reference (avoid storing full card details)
      paymentInfo: {
        cardName: paymentInfo.value.cardName,
        lastFourDigits: paymentInfo.value.cardNumber.slice(-4),
        cardType: getCardType(paymentInfo.value.cardNumber)
      },
      status: 'processing',
      paymentMethod: 'credit card',
      orderDate: timestamp,
      estimatedDelivery: new Date(timestamp.setDate(timestamp.getDate() + 7))
    }

    const orderRef = await firebaseService.createOrder(orderData)

    // Clear the cart
    cartStore.clearCart()

    // Show success message
    successMsg.value = `Order placed successfully! Your order number is ${orderNumber}.`

    // Redirect to orders page after a delay
    setTimeout(() => {
      router.push('/account')
    }, 3000)
  } catch (error) {
    errorMsg.value = 'Failed to place order. Please try again.'
    console.error('Error placing order:', error)
  } finally {
    loading.value = false
  }
}

// Helper function to determine card type based on first digits
const getCardType = (cardNumber) => {
  const cleanedNumber = cardNumber.replace(/\D/g, '')

  if (/^4/.test(cleanedNumber)) return 'Visa'
  if (/^5[1-5]/.test(cleanedNumber)) return 'MasterCard'
  if (/^3[47]/.test(cleanedNumber)) return 'American Express'
  if (/^6(?:011|5)/.test(cleanedNumber)) return 'Discover'
  return 'Unknown'
}

// Form validation directive (for applying masks to inputs)
const directive = {
  mounted(el, binding) {
    el.addEventListener('input', (e) => {
      const { value } = binding
      if (!value || !value.value) return  // Guard against undefined value

      const inputValue = e.target.value.replace(/\D/g, '')
      const mask = value.value

      let result = ''
      let currentIndex = 0

      for (let i = 0; i < mask.length && currentIndex < inputValue.length; i++) {
        if (mask[i] === '#') {
          result += inputValue[currentIndex]
          currentIndex++
        } else {
          result += mask[i]
        }
      }

      e.target.value = result
    })
  }
}

// Create our custom directive for Vue
const vMaskDirective = {
  mounted(el, binding) {
    if (binding && binding.value) {  // Added null check
      directive.mounted(el, binding)
    }
  }
}

// Register the custom directive
const vMask = vMaskDirective
</script>

<style scoped>
.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-radius: 0.375rem;
  outline: none;
  transition: all;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all;
  font-weight: 500;
}

.btn-primary {
  background-color: var(--accent-primary);
  color: white;
}
.btn-primary:hover {
  background-color: var(--accent-secondary);
}
.btn-primary:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--accent-primary);
}

.btn-secondary {
  background-color: var(--light-neutral-200);
  color: var(--light-text-primary);
}
.btn-secondary:hover {
  background-color: var(--light-neutral-300);
}

:root[data-theme="dark"] .btn-secondary {
  background-color: var(--dark-neutral-700);
  color: var(--dark-text-primary);
}
:root[data-theme="dark"] .btn-secondary:hover {
  background-color: var(--dark-neutral-600);
}
</style>