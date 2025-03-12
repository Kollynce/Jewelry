<template>
  <div class="admin-dashboard container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shop Manager Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-2">Products</h2>
        <p class="text-gray-600 mb-4">Manage your jewelry inventory</p>
        <router-link 
          to="/admin/products" 
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Manage Products →
        </router-link>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-2">Orders</h2>
        <p class="text-gray-600 mb-4">View and process customer orders</p>
        <router-link 
          to="/admin/orders" 
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Manage Orders →
        </router-link>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-2">Categories</h2>
        <p class="text-gray-600 mb-4">Organize your jewelry products</p>
        <router-link 
          to="/admin/categories" 
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Manage Categories →
        </router-link>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
      <div class="flex flex-wrap gap-4">
        <router-link 
          to="/admin/products/new" 
          class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add New Product
        </router-link>
        <router-link 
          to="/admin/categories/new" 
          class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Add New Category
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  // Additional admin validation could be added here if needed
  if (!authStore.user) {
    router.push('/login');
  }
});
</script>

<style scoped>
.admin-dashboard {
  min-height: 80vh;
}
</style>