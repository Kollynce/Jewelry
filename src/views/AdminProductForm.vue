<template>
  <div class="admin-product-form container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">{{ isEditMode ? 'Edit Product' : 'Add New Product' }}</h1>
      <router-link 
        to="/admin/products" 
        class="text-gray-600 hover:text-gray-800"
      >
        Back to Products
      </router-link>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <form @submit.prevent="saveProduct">
        <!-- Basic Information -->
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-4">Basic Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="product.name" 
                required
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                id="category" 
                v-model="product.category" 
                required
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                <option value="Beaded Jewelry">Beaded Jewelry</option>
                <option value="String Jewelry">String Jewelry</option>
                <option value="Metal Jewelry">Metal Jewelry</option>
                <option value="Gemstones">Gemstones</option>
                <option value="Earrings">Earrings</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Bracelets">Bracelets</option>
                <option value="Rings">Rings</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input 
                type="number" 
                id="price" 
                v-model.number="product.price" 
                min="0.01" 
                step="0.01"
                required
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            
            <div>
              <label for="stock" class="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
              <input 
                type="number" 
                id="stock" 
                v-model.number="product.stock" 
                min="0" 
                required
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
          </div>
        </div>
        
        <!-- Description -->
        <div class="mb-6">
          <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            id="description" 
            v-model="product.description" 
            rows="4"
            required
            class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        
        <!-- Images -->
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-4">Product Images</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in product.images" 
              :key="index"
              class="relative border rounded p-2 group"
            >
              <img 
                :src="getImageSrc(image)" 
                class="w-full h-32 object-cover rounded" 
                alt="Product image"
              >
              <button 
                type="button"
                @click="removeImage(index)" 
                class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
            
            <div 
              class="border border-dashed rounded-lg flex flex-col items-center justify-center min-h-[8rem] relative"
              :class="isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false" 
              @drop.prevent="handleFileDrop"
            >
              <div 
                class="absolute inset-0 flex flex-col items-center justify-center p-4"
                @click="$refs.fileInput.click()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="text-sm font-medium text-gray-700 mb-1">Drag image here or click to upload</p>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                <input 
                  ref="fileInput"
                  type="file" 
                  id="image-upload"
                  @change="handleFileUpload"
                  accept="image/*"
                  class="hidden"
                  aria-label="Upload image"
                />
              </div>
            </div>
          </div>
          
          <div class="mt-4 flex items-center gap-4">
            <div class="flex-1">
              <label for="image-url" class="block text-sm font-medium text-gray-700 mb-1">Add Image by URL</label>
              <div class="flex">
                <input 
                  type="url" 
                  id="image-url"
                  v-model="newImageUrl" 
                  placeholder="https://example.com/image.jpg"
                  class="flex-1 p-2 border border-gray-300 rounded-l focus:ring-blue-500 focus:border-blue-500"
                >
                <button 
                  type="button"
                  @click="addImage" 
                  class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r transition-colors"
                  :disabled="isUploading || !newImageUrl.trim()"
                >
                  Add URL
                </button>
              </div>
            </div>
          </div>
          
          <!-- Upload preview -->
          <div v-if="previewImage" class="mt-4">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Image preview:</h3>
            <div class="flex items-center gap-4">
              <img :src="previewImage" class="h-24 w-24 object-cover rounded border" alt="Preview image">
              <div class="flex-1">
                <p class="text-sm text-gray-700">Ready to upload</p>
                <div class="flex gap-2 mt-1">
                  <button 
                    type="button" 
                    @click="confirmImageUpload"
                    class="text-sm bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded transition-colors"
                  >
                    Add to product
                  </button>
                  <button 
                    type="button" 
                    @click="cancelImageUpload"
                    class="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Upload progress/status -->
          <div v-if="isUploading" class="mt-4">
            <div class="bg-blue-50 text-blue-700 px-4 py-3 rounded flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ uploadStatus }}</span>
            </div>
            <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" :style="`width: ${uploadProgress}%`"></div>
            </div>
          </div>
          
          <p class="text-sm text-gray-500 mt-4">
            Add at least one product image. For best results, use images with a 1:1 aspect ratio.
            <br>
            <span class="text-green-600 font-medium">High-resolution images will be automatically resized to optimize performance.</span>
          </p>
        </div>
        
        <!-- Additional Details -->
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-4">Additional Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="materials" class="block text-sm font-medium text-gray-700 mb-1">Materials</label>
              <input 
                type="text" 
                id="materials" 
                v-model="product.materials" 
                placeholder="e.g. Sterling silver, glass beads, etc."
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            
            <div>
              <label for="dimensions" class="block text-sm font-medium text-gray-700 mb-1">Dimensions</label>
              <input 
                type="text" 
                id="dimensions" 
                v-model="product.dimensions" 
                placeholder="e.g. 18 inches, 2.5cm diameter, etc."
                class="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
          </div>
          
          <div class="mt-4">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="featured" 
                v-model="product.featured"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label for="featured" class="ml-2 block text-sm text-gray-700">
                Featured product (display on homepage)
              </label>
            </div>
          </div>
        </div>
        
        <div class="border-t pt-6 flex justify-end space-x-4">
          <button 
            type="button" 
            @click="$router.go(-1)" 
            class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            :disabled="isSaving"
          >
            {{ isSaving ? 'Saving...' : 'Save Product' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Error Alert -->
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
      <strong class="font-bold mr-1">Error:</strong>
      <span class="block sm:inline">{{ error }}</span>
      <span 
        class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" 
        @click="error = null"
      >
        <span class="text-xl">&times;</span>
      </span>
    </div>
    
    <!-- Warning for temporary images -->
    <div v-if="hasTempImages" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
      <strong class="font-bold">Warning:</strong>
      <span class="block sm:inline">
        Some images are temporarily stored locally due to CORS restrictions.
        They will be lost if you refresh the page. Please check the CORS settings for your Firebase Storage.
      </span>
    </div>

    <!-- Size warning -->
    <div v-if="showSizeWarning" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
      <strong class="font-bold">Warning:</strong>
      <span class="block sm:inline">
        Some uploaded images may be stored as base64 strings in the database, which has size limitations.
        Very large images may cause problems when saving the product.
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { firebaseService } from '../services/firebaseService';

const router = useRouter();
const route = useRoute();

const productId = computed(() => route.params.id);
const isEditMode = computed(() => !!productId.value);

const product = ref({
  name: '',
  category: '',
  description: '',
  price: 0,
  stock: 1,
  images: [],
  featured: false,
  materials: '',
  dimensions: ''
});

const newImageUrl = ref('');
const isSaving = ref(false);
const isUploading = ref(false);
const error = ref(null);
const showSizeWarning = ref(false);
const formKey = computed(() => isEditMode.value ? `product_edit_${productId.value}` : 'product_new');
const uploadStatus = ref('Processing image...');
const uploadProgress = ref(0);
const isDragging = ref(false);
const previewImage = ref('');
const selectedFile = ref(null);

const hasTempImages = computed(() => {
  return product.value.images.some(img => img.startsWith('temp://'));
});

// Load product data from server or localStorage
onMounted(async () => {
  if (isEditMode.value) {
    try {
      const productData = await firebaseService.getProduct(productId.value);
      if (productData) {
        product.value = { ...productData };
      } else {
        console.error('Product not found');
        router.push('/admin/products');
      }
    } catch (err) {
      console.error('Error loading product:', err);
      error.value = 'Failed to load product';
    }
  } else {
    // For new products, try to load data from localStorage
    const savedForm = localStorage.getItem(formKey.value);
    if (savedForm) {
      try {
        product.value = JSON.parse(savedForm);
      } catch (err) {
        console.error('Error parsing saved form data:', err);
      }
    }
  }
});

// Save form data to localStorage when it changes
watch(() => product.value, (newValue) => {
  localStorage.setItem(formKey.value, JSON.stringify(newValue));
}, { deep: true });

// Clean up localStorage when component unmounts after successful save
onBeforeUnmount(() => {
  // Only keep localStorage if there was an error (form not successfully submitted)
  if (!error.value && !isSaving.value) {
    localStorage.removeItem(formKey.value);
  }
});

const addImage = () => {
  if (newImageUrl.value.trim()) {
    product.value.images.push(newImageUrl.value.trim());
    newImageUrl.value = '';
  }
};

const removeImage = (index) => {
  product.value.images.splice(index, 1);
};

// Convert any base64 or temp URLs to displayable images
const getImageSrc = (url) => {
  if (url.startsWith('base64://')) {
    return url.replace('base64://', '');
  } else if (url.startsWith('temp://')) {
    return url.replace('temp://', '');
  }
  return url;
};

// Handle file drop for drag and drop functionality
const handleFileDrop = (event) => {
  isDragging.value = false;
  const droppedFiles = event.dataTransfer.files;
  
  if (droppedFiles.length > 0) {
    processFile(droppedFiles[0]);
  }
};

// Process the selected file and show preview
const processFile = (file) => {
  if (!file) return;

  // Validate file type
  if (!file.type.match('image.*')) {
    error.value = 'Please select an image file';
    return;
  }

  // Validate file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    error.value = 'Image size should be less than 5MB';
    return;
  }

  selectedFile.value = file;
  
  // Create preview
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImage.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

// Handle file selection from input
const handleFileUpload = (event) => {
  processFile(event.target.files[0]);
};

// Cancel image upload and reset preview
const cancelImageUpload = () => {
  previewImage.value = '';
  selectedFile.value = null;
  if (this.$refs && this.$refs.fileInput) {
    this.$refs.fileInput.value = '';
  }
};

// Confirm and proceed with image upload
const confirmImageUpload = async () => {
  if (!selectedFile.value) return;

  isUploading.value = true;
  error.value = null;
  uploadProgress.value = 0;

  try {
    // Check file size and update status accordingly
    const fileSizeMB = (selectedFile.value.size / (1024 * 1024)).toFixed(2);
    
    if (selectedFile.value.size > 1024 * 1024) { // Larger than 1MB
      uploadStatus.value = `Resizing ${fileSizeMB}MB image for optimal performance...`;
    } else {
      uploadStatus.value = `Processing ${fileSizeMB}MB image...`;
    }
    
    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      uploadProgress.value += 5;
      if (uploadProgress.value >= 90) clearInterval(progressInterval);
    }, 100);
    
    // Process file - will be converted to base64
    const imageUrl = await firebaseService.uploadProductImage(selectedFile.value);
    product.value.images.push(imageUrl);
    
    uploadProgress.value = 100;
    uploadStatus.value = "Upload complete!";
    
    // Show size warning if we're storing base64 data
    if (imageUrl.startsWith('base64://')) {
      showSizeWarning.value = true;
    }
    
    // Reset preview and file input
    setTimeout(() => {
      previewImage.value = '';
      selectedFile.value = null;
      isUploading.value = false;
    }, 1000);
    
  } catch (err) {
    console.error('Error processing image:', err);
    error.value = `Failed to process image: ${err.message || 'Unknown error'}`;
    isUploading.value = false;
  }
};

// Modified saveProduct to handle different image types
const saveProduct = async () => {
  isSaving.value = true;
  error.value = null;
  
  try {
    // Validate form
    if (!product.value.name || !product.value.category || !product.value.description || product.value.images.length === 0) {
      throw new Error('Please fill out all required fields and add at least one image');
    }
    
    // Check total size of base64 images
    const base64Images = product.value.images.filter(img => img.startsWith('base64://'));
    if (base64Images.length > 0) {
      // Calculate approximate size of all base64 strings
      const totalBase64Size = base64Images.reduce((size, img) => size + img.length, 0);
      const approxSizeInKB = totalBase64Size / 1024;
      
      // Warn if total size exceeds 700KB (to stay well under Firestore's 1MB limit)
      if (approxSizeInKB > 700) {
        if (!confirm(`Warning: Your product has approximately ${approxSizeInKB.toFixed(0)}KB of image data, which is approaching Firestore's limit. Continue anyway?`)) {
          isSaving.value = false;
          return;
        }
      }
    }
    
    // Proceed with saving
    if (isEditMode.value) {
      await firebaseService.updateProduct(productId.value, product.value);
    } else {
      await firebaseService.createProduct(product.value);
    }
    
    // Clear localStorage after successful save
    localStorage.removeItem(formKey.value);
    router.push('/admin/products');
  } catch (err) {
    console.error('Error saving product:', err);
    error.value = err.message;
  } finally {
    isSaving.value = false;
  }
};
</script>

<style scoped>
.admin-product-form {
  min-height: 80vh;
}
</style>