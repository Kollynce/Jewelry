<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import { firebaseService } from '../services/firebaseService'

const authStore = useAuthStore()
const userProfile = ref(null)
const orders = ref([])
const loading = ref(true)
const editMode = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

// For development mode detection
const isDev = ref(import.meta.env.DEV || false)

// Form data for profile editing
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: ''
})

onMounted(async () => {
  if (authStore.user) {
    try {
      // Get user profile
      const profile = await firebaseService.getUserProfile(authStore.user.uid)
      userProfile.value = profile

      // Pre-populate form data
      if (profile) {
        formData.value = {
          firstName: profile.firstName || '',
          lastName: profile.lastName || '',
          email: profile.email || authStore.user.email,
          phone: profile.phone || '',
          address: profile.address || ''
        }
      }

      // Get user orders with better error handling
      try {
        console.log('Fetching orders for user:', authStore.user.uid);
        const userOrders = await firebaseService.getUserOrders(authStore.user.uid);
        console.log('Orders received:', userOrders.length, userOrders);
        
        if (userOrders && userOrders.length > 0) {
          orders.value = userOrders.map(order => ({
            ...order,
            // Ensure we have proper formatting for display
            formattedDate: formatOrderDate(order.orderDate),
            displayTotal: typeof order.total === 'number' ? order.total.toFixed(2) : '0.00',
            orderNumber: order.orderNumber || `ORD-${order.id.substring(0, 6)}`,
            items: Array.isArray(order.items) ? order.items : []
          }));
          console.log('Processed orders:', orders.value);
        } else {
          console.log('No orders found or empty array returned');
          orders.value = [];
        }
      } catch (orderError) {
        console.error('Error fetching orders:', orderError);
        orders.value = [];
        errorMsg.value = 'Could not load order history';
      }
    } catch (error) {
      errorMsg.value = 'Error loading user data'
      console.error('Error in account view:', error)
    } finally {
      loading.value = false
    }
  } else {
    loading.value = false;
  }
})

// Format firestore timestamp for display with better error handling
const formatOrderDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    // Handle multiple timestamp formats
    let date;
    
    if (timestamp.toDate && typeof timestamp.toDate === 'function') {
      // Firestore Timestamp
      date = timestamp.toDate();
    } else if (timestamp.seconds) {
      // Firestore Timestamp in serialized form
      date = new Date(timestamp.seconds * 1000);
    } else if (timestamp instanceof Date) {
      // JavaScript Date
      date = timestamp;
    } else if (typeof timestamp === 'string') {
      // ISO string or other string format
      date = new Date(timestamp);
    } else if (typeof timestamp === 'number') {
      // Unix timestamp (milliseconds)
      date = new Date(timestamp);
    } else {
      return 'Invalid date';
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error, timestamp);
    return 'Date error';
  }
}

// Handle profile form submission
const saveProfile = async () => {
  errorMsg.value = ''
  successMsg.value = ''
  
  try {
    await firebaseService.updateUserProfile(authStore.user.uid, formData.value)
    userProfile.value = { ...userProfile.value, ...formData.value }
    editMode.value = false
    successMsg.value = 'Profile updated successfully!'
  } catch (error) {
    errorMsg.value = 'Failed to update profile'
    console.error('Error updating profile:', error)
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">My Account</h1>
    
    <div v-if="loading" class="text-center py-8">
      <p>Loading account information...</p>
    </div>
    
    <div v-else>
      <!-- Success/error messages -->
      <div v-if="successMsg" class="bg-green-100 p-4 rounded mb-6">
        <p class="text-green-700">{{ successMsg }}</p>
      </div>
      
      <div v-if="errorMsg" class="bg-red-100 p-4 rounded mb-6">
        <p class="text-red-700">{{ errorMsg }}</p>
      </div>
      
      <!-- User profile section -->
      <div class="bg-white shadow rounded-lg p-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold">Profile Information</h2>
          <button 
            v-if="!editMode" 
            @click="editMode = true"
            class="btn btn-secondary"
          >
            Edit Profile
          </button>
        </div>
        
        <!-- View mode -->
        <div v-if="!editMode" class="grid md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600">Full Name</p>
            <p>{{ userProfile?.firstName }} {{ userProfile?.lastName }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Email</p>
            <p>{{ userProfile?.email || authStore.user.email }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Phone</p>
            <p>{{ userProfile?.phone || 'Not provided' }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Address</p>
            <p>{{ userProfile?.address || 'Not provided' }}</p>
          </div>
        </div>
        
        <!-- Edit mode -->
        <form v-else @submit.prevent="saveProfile" class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="form-label">First Name</label>
            <input v-model="formData.firstName" type="text" class="form-input">
          </div>
          
          <div>
            <label class="form-label">Last Name</label>
            <input v-model="formData.lastName" type="text" class="form-input">
          </div>
          
          <div>
            <label class="form-label">Email</label>
            <input v-model="formData.email" type="email" class="form-input" disabled>
          </div>
          
          <div>
            <label class="form-label">Phone</label>
            <input v-model="formData.phone" type="tel" class="form-input">
          </div>
          
          <div class="md:col-span-2">
            <label class="form-label">Address</label>
            <textarea v-model="formData.address" class="form-input"></textarea>
          </div>
          
          <div class="md:col-span-2 flex justify-end space-x-4">
            <button 
              type="button" 
              @click="editMode = false" 
              class="btn btn-secondary"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      
      <!-- Order history section -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Order History</h2>
        
        <div v-if="orders.length === 0" class="text-center py-8 bg-gray-50 rounded">
          <p>You haven't placed any orders yet.</p>
          <router-link to="/products" class="btn btn-primary mt-4">Start Shopping</router-link>
        </div>
        
        <div v-else>
          <div v-for="order in orders" :key="order.id" class="border-b py-4 last:border-b-0">
            <div class="flex justify-between">
              <div>
                <p class="font-semibold">Order #{{ order.orderNumber }}</p>
                <p class="text-sm text-gray-600">{{ order.formattedDate }}</p>
              </div>
              <p class="font-semibold">${{ order.displayTotal }}</p>
            </div>
            
            <div class="mt-2">
              <p v-if="!order.items || order.items.length === 0" class="text-sm text-gray-500">
                No items found in this order
              </p>
              <div v-else v-for="(item, index) in order.items" :key="index" class="text-sm">
                {{ item.quantity }}x {{ item.name }}
              </div>
            </div>
            
            <div class="mt-3 text-xs text-gray-500">
              Status: <span class="inline-block px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">{{ order.status || 'Processing' }}</span>
            </div>
          </div>
          
          <!-- Debug info in development - fixed to use ref instead of import.meta directly -->
          <div v-if="isDev" class="mt-6 p-3 bg-gray-100 rounded text-xs">
            <p class="font-bold">Debug Info:</p>
            <p>Orders count: {{ orders.length }}</p>
            <p>First order ID: {{ orders[0]?.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md transition-all font-medium;
}

.btn-primary {
  @apply bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
}

.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
}

.form-input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
</style>
