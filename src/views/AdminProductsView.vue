<template>
  <div class="bg-gray-100">
    <div class="admin-products container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Manage Products</h1>
      <router-link 
        to="/admin/products/new" 
        class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
      >
        <span class="mr-2">Add New Product</span>
        <span class="text-xl">+</span>
      </router-link>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="mb-4">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search products..." 
          class="w-full p-2 border border-gray-300 rounded"
        >
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left">Image</th>
              <th class="py-3 px-4 text-left">Name</th>
              <th class="py-3 px-4 text-left">Category</th>
              <th class="py-3 px-4 text-left">Price</th>
              <th class="py-3 px-4 text-left">Stock</th>
              <th class="py-3 px-4 text-left">Featured</th>
              <th class="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="7" class="py-4 text-center">
                <LoadingSpinner />
              </td>
            </tr>
            <tr v-else-if="filteredProducts.length === 0">
              <td colspan="7" class="py-4 text-center">
                No products found
              </td>
            </tr>
            <tr v-for="product in filteredProducts" :key="product.id" class="border-b hover:bg-gray-50">
              <td class="py-3 px-4">
                <img :src="processImageUrl(product.images[0])" :alt="product.name" class="w-16 h-16 object-cover rounded" @error="handleImageError">
              </td>
              <td class="py-3 px-4">{{ product.name }}</td>
              <td class="py-3 px-4">{{ product.category }}</td>
              <td class="py-3 px-4">${{ product.price.toFixed(2) }}</td>
              <td class="py-3 px-4">{{ product.stock }}</td>
              <td class="py-3 px-4">
                <span v-if="product.featured" class="text-green-500">Yes</span>
                <span v-else class="text-gray-500">No</span>
              </td>
              <td class="py-3 px-4">
                <div class="flex space-x-2">
                  <button 
                    @click="editProduct(product)" 
                    class="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button 
                    @click="confirmDelete(product)" 
                    class="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <Modal v-if="showDeleteModal" @close="showDeleteModal = false">
      <template #header>
        <h3 class="text-xl font-medium text-gray-900">Confirm Delete</h3>
      </template>
      <template #body>
        <p class="text-gray-600">
          Are you sure you want to delete "{{ productToDelete?.name }}"?
          This action cannot be undone.
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-3">
          <Button 
            variant="secondary" 
            @click="showDeleteModal = false"
          >
            Cancel
          </Button>
          <Button 
            variant="danger" 
            @click="deleteProduct"
          >
            Delete
          </Button>
        </div>
      </template>
    </Modal>
  </div>
  </div>
  
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { firebaseService } from '../services/firebaseService';
import LoadingSpinner from '../components/ui/LoadingSpinner.vue';
import Modal from '../components/ui/Modal.vue';
import Button from '../components/ui/Button.vue';

const router = useRouter();
const products = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const showDeleteModal = ref(false);
const productToDelete = ref(null);

// Fetch products when component mounts
onMounted(async () => {
  try {
    products.value = await firebaseService.getProducts();
  } catch (error) {
    console.error('Failed to load products:', error);
  } finally {
    loading.value = false;
  }
});

// Filtered products based on search query
const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  
  const query = searchQuery.value.toLowerCase();
  return products.value.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
});

// Edit product function
const editProduct = (product) => {
  router.push(`/admin/products/edit/${product.id}`);
};

// Delete product functions
const confirmDelete = (product) => {
  productToDelete.value = product;
  showDeleteModal.value = true;
};

const deleteProduct = async () => {
  if (!productToDelete.value) return;
  
  try {
    await firebaseService.deleteProduct(productToDelete.value.id);
    
    // Remove from local products array
    const index = products.value.findIndex(p => p.id === productToDelete.value.id);
    if (index !== -1) {
      products.value.splice(index, 1);
    }
    
    showDeleteModal.value = false;
    productToDelete.value = null;
  } catch (error) {
    console.error('Failed to delete product:', error);
    // Show error notification (you can add this functionality)
  }
};

// Process image URL function to handle base64 and other formats
const processImageUrl = (imageUrl) => {
  if (!imageUrl) return 'https://via.placeholder.com/300x300?text=No+Image';
  
  if (typeof imageUrl === 'string') {
    // Handle base64 images
    if (imageUrl.startsWith('base64://')) {
      return imageUrl.replace('base64://', '');
    }
    // Handle temp images
    if (imageUrl.startsWith('temp://')) {
      return imageUrl.replace('temp://', '');
    }
  }
  
  return imageUrl;
};

// Handle image errors
const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src);
  event.target.src = '/images/no-image.jpg';
  
  // If the local fallback fails, use inline SVG
  event.target.onerror = function() {
    const parent = event.target.parentNode;
    if (parent) {
      const svgElement = document.createElement('div');
      svgElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <path d="M12 6v12M6 12h12" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
      svgElement.className = 'broken-image w-16 h-16';
      parent.replaceChild(svgElement, event.target);
    }
  };
};
</script>

<style scoped>
.admin-products {
  min-height: 80vh;
}

.broken-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 4px;
}
</style>