<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const firstName = ref('')
const lastName = ref('')
const errorMsg = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  errorMsg.value = ''
  loading.value = true
  
  // Validate passwords match
  if (password.value !== confirmPassword.value) {
    errorMsg.value = 'Passwords do not match'
    loading.value = false
    return
  }
  
  try {
    // Register user with additional profile data
    await authStore.register(email.value, password.value, {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    })
    router.push('/')
  } catch (error) {
    errorMsg.value = error.message || 'Failed to register. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-6">Create Account</h1>
    
    <div v-if="errorMsg" class="bg-red-100 p-4 rounded mb-6">
      <p class="text-red-700">{{ errorMsg }}</p>
    </div>
    
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="firstName" class="form-label">First Name</label>
          <input
            id="firstName"
            v-model="firstName"
            type="text"
            required
            class="form-input"
            placeholder="First name"
          />
        </div>
        
        <div>
          <label for="lastName" class="form-label">Last Name</label>
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            required
            class="form-input"
            placeholder="Last name"
          />
        </div>
      </div>
      
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="form-input"
          placeholder="Your email"
        />
      </div>
      
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="form-input"
          placeholder="Create password"
          minlength="6"
        />
      </div>
      
      <div class="mb-6">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          required
          class="form-input"
          placeholder="Confirm password"
          minlength="6"
        />
      </div>
      
      <button 
        type="submit" 
        class="btn btn-primary w-full py-3"
        :disabled="loading"
      >
        {{ loading ? 'Creating Account...' : 'Register' }}
      </button>
    </form>
    
    <div class="mt-4 text-center">
      <p>Already have an account? <RouterLink to="/login" class="text-blue-600 hover:underline">Login</RouterLink></p>
    </div>
  </div>
</template>
