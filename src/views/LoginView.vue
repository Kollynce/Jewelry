<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  errorMsg.value = ''
  loading.value = true
  
  try {
    await authStore.login(email.value, password.value)
    router.push('/')
  } catch (error) {
    errorMsg.value = error.message || 'Failed to login. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-6">Login</h1>
    
    <div v-if="errorMsg" class="bg-red-100 p-4 rounded mb-6">
      <p class="text-red-700">{{ errorMsg }}</p>
    </div>
    
    <form @submit.prevent="handleSubmit">
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
      
      <div class="mb-6">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="form-input"
          placeholder="Your password"
        />
      </div>
      
      <button 
        type="submit" 
        class="btn btn-primary w-full py-3"
        :disabled="loading"
      >
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
    
    <div class="mt-4 text-center">
      <p>Don't have an account? <RouterLink to="/register" class="text-blue-600 hover:underline">Register</RouterLink></p>
    </div>
  </div>
</template>
