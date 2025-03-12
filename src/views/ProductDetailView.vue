<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { firebaseService } from '../services/firebaseService'
import { useCartStore } from '../stores/cart'
import { mockDataLoader } from '../utils/mockDataLoader'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const product = ref(null)
const loading = ref(true)
const error = ref(null)
const quantity = ref(1)
const selectedImageIndex = ref(0)
const selectedColorIndex = ref(0)
const expandedSections = ref(['Description'])

// Remove isInWishlist and rating from the state

const productId = computed(() => route.params.id)

// Add a function to process image URLs properly
const processImageUrl = (url) => {
  if (!url) return null;
  
  // Handle base64 images with the incorrect prefix
  if (typeof url === 'string' && url.startsWith('base64://')) {
    return url.replace('base64://', '');
  }
  
  // For normal URLs
  return url;
}

const fetchProduct = async () => {
  loading.value = true
  error.value = null
  
  try {
    console.log("Fetching product with ID:", productId.value)
    
    // Try to get the product (now Firebase service will already fall back to mock data)
    try {
      product.value = await firebaseService.getProduct(productId.value)
    } catch (err) {
      console.warn("Both Firebase and mock data fetch failed:", err)
      
      // Last resort: create a default product
      product.value = {
        id: productId.value,
        name: "Sample Jewelry Piece",
        description: "This is a placeholder for a product that couldn't be found.",
        price: 99.99,
        image: 'https://via.placeholder.com/400x400?text=Sample+Product',
        category: 'necklaces',
        material: 'Mixed materials',
        beadSize: 'Various',
        length: '18 inches',
        closure: 'Standard clasp',
        colors: [
          { name: 'Natural', class: 'bg-amber-200' },
          { name: 'Rose', class: 'bg-rose-300' },
          { name: 'Turquoise', class: 'bg-cyan-400' }
        ]
      }
    }
    
    console.log("Product loaded:", product.value)
    
    // Use local default image instead of relying on external placeholder service
    const defaultImage = '/images/no-image.jpg';
    const productImage = processImageUrl(product.value.imageUrl || product.value.image) || defaultImage;
    console.log("Product image source:", productImage);
    
    // Fix image structure handling
    if (!product.value.images || !Array.isArray(product.value.images) || product.value.images.length === 0) {
      console.log("Creating image structure with:", productImage);
      product.value.images = [
        {
          main: productImage,
          thumb: productImage
        }
      ];
    } else {
      console.log("Product already has images:", product.value.images);
      // Process existing images to ensure they're in correct format
      product.value.images = product.value.images.map(img => {
        if (typeof img === 'string') {
          const processedUrl = processImageUrl(img);
          return { main: processedUrl, thumb: processedUrl };
        }
        return {
          main: processImageUrl(img.main || img.imageUrl || img.image) || defaultImage,
          thumb: processImageUrl(img.thumb || img.main || img.imageUrl || img.image) || defaultImage
        };
      });
    }
    
    // Ensure product has the necessary structure for beaded jewelry display
    if (!product.value.images) {
      product.value.images = [
        {
          main: product.value.image || 'https://via.placeholder.com/400x400?text=No+Image',
          thumb: product.value.image || 'https://via.placeholder.com/100x100?text=No+Image'
        }
      ]
    }
    
    // Default colors for beaded jewelry if not specified
    if (!product.value.colors) {
      product.value.colors = [
        { name: 'Natural', class: 'bg-amber-200' },
        { name: 'Rose', class: 'bg-rose-300' },
        { name: 'Turquoise', class: 'bg-cyan-400' }
      ]
    }
    
    // Add beaded jewelry specific attributes
    if (!product.value.material) {
      product.value.material = 'Natural gemstone beads'
    }
    
    if (!product.value.beadSize) {
      product.value.beadSize = '6mm'
    }
    
    if (!product.value.length) {
      product.value.length = '18 inches'
    }
    
    if (!product.value.closure) {
      product.value.closure = 'Secure lobster clasp'
    }
    
    if (!product.value.sections) {
      product.value.sections = []
      
      product.value.sections.push({ 
        name: 'Description', 
        content: product.value.description || 'Handcrafted with care using premium beads for a unique piece that complements any style.' 
      })
      
      if (product.value.features) {
        product.value.sections.push({ name: 'Features', content: product.value.features })
      }
      
      // Add jewelry care information
      product.value.sections.push({ 
        name: 'Care Instructions', 
        content: [
          'Store in a cool, dry place away from direct sunlight',
          'Avoid contact with perfumes, lotions, and chemicals',
          'Clean gently with a soft, lint-free cloth',
          'Remove before swimming or bathing'
        ]
      })
      
      // Add sizing information
      product.value.sections.push({
        name: 'Sizing & Fit',
        content: 'Our standard bracelet length is 7.5 inches. Necklaces are available in 16, 18, and 20 inch lengths. Please contact us for custom sizing.'
      })
      
      // Add shipping information
      product.value.sections.push({ 
        name: 'Shipping', 
        content: 'Handmade to order. Please allow 1-3 business days for production plus shipping time.' 
      })
      
      // Add returns policy
      product.value.sections.push({ 
        name: 'Returns', 
        content: 'We accept returns within 14 days of delivery for unworn items in original packaging.' 
      })
    }
  } catch (err) {
    console.error("Error fetching product:", err)
    error.value = err.message || 'Failed to load product'
  } finally {
    loading.value = false
  }
}

// Improve image error handler with better fallbacks
const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src);
  
  // Use a locally hosted fallback image instead of an external service
  event.target.src = '/images/no-image.jpg';
  
  // If local fallback fails, use inline SVG as final fallback
  event.target.onerror = function() {
    const parent = event.target.parentNode;
    if (parent) {
      // Replace with a minimal SVG showing a broken image
      const svgElement = document.createElement('div');
      svgElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <path d="M12 6v12M6 12h12" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
      svgElement.className = 'broken-image';
      parent.replaceChild(svgElement, event.target);
    }
  };
};

onMounted(fetchProduct)

// Re-fetch when route params change
watch(() => route.params.id, fetchProduct)

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value)
    alert(`${quantity.value} ${product.value.name}${quantity.value > 1 ? 's' : ''} added to cart!`)
  }
}

const toggleSection = (sectionName) => {
  if (expandedSections.value.includes(sectionName)) {
    expandedSections.value = expandedSections.value.filter(name => name !== sectionName)
  } else {
    expandedSections.value.push(sectionName)
  }
}

// Navigation helpers
const goBack = () => {
  router.back()
}

// Remove toggleWishlist method
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Breadcrumb navigation -->
    <nav class="text-sm mb-6">
      <ol class="flex items-center space-x-2">
        <li><router-link to="/" class="text-gray-500 hover:text-purple-600">Home</router-link></li>
        <li><span class="text-gray-400 mx-1">›</span></li>
        <li><router-link to="/" class="text-gray-500 hover:text-purple-600">Shop</router-link></li>
        <li><span class="text-gray-400 mx-1">›</span></li>
        <li class="text-purple-600 font-medium">{{ product?.name || 'Product' }}</li>
      </ol>
    </nav>
    
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600 mb-2"></div>
      <p>Loading your beautiful jewelry...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-100 p-4 rounded mb-6">
      <p class="text-red-700">{{ error }}</p>
      <button @click="goBack" class="mt-2 text-sm text-purple-600 hover:underline">← Return to previous page</button>
    </div>
    
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Left Column: Product Images -->
      <div class="flex flex-col">
        <!-- Main product image with hover zoom effect -->
        <div class="product-image-container relative overflow-hidden rounded-lg shadow-md border border-gray-100 mb-4 aspect-square">
          <img
            :src="processImageUrl(product.images[selectedImageIndex]?.main) || processImageUrl(product.imageUrl) || processImageUrl(product.image) || '/images/no-image.jpg'"
            :alt="product.name"
            class="product-image w-full h-full object-contain rounded-lg"
            @error="handleImageError"
          />
          <div class="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
            <button @click="selectedImageIndex = (selectedImageIndex + 1) % product.images.length" 
              class="text-gray-600 hover:text-purple-600" title="Next image">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Debug info - Remove in production -->
        <!-- <div class="text-xs text-gray-500 mb-2">
          <p>Selected Image: {{ selectedImageIndex }}</p>
          <p>Image Source: {{ product.images[selectedImageIndex]?.main }}</p>
        </div> -->
        
        <!-- Thumbnails -->
        <div class="flex space-x-2 overflow-x-auto pb-2">
          <div
            v-for="(image, index) in product.images"
            :key="index"
            @click="selectedImageIndex = index"
            :class="[
              'w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 flex-shrink-0',
              index === selectedImageIndex ? 'border-purple-600' : 'border-transparent'
            ]"
          >
            <img
              :src="processImageUrl(image.thumb) || processImageUrl(image.main) || '/images/no-image.jpg'"
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>

      <!-- Right Column: Product Details -->
      <div class="flex flex-col space-y-6">
        <!-- Product Name -->
        <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>

        <!-- Price -->
        <div class="flex items-center">
          <p class="text-2xl text-gray-900">${{ product.price.toFixed(2) }}</p>
        </div>
        
        <!-- Jewelry Specific Details -->
        <div class="grid grid-cols-2 gap-4 mt-2 text-sm bg-gray-50 p-4 rounded-lg">
          <div>
            <span class="font-medium text-gray-700">Material:</span>
            <p>{{ product.material }}</p>
          </div>
          <div>
            <span class="font-medium text-gray-700">Bead Size:</span>
            <p>{{ product.beadSize }}</p>
          </div>
          <div>
            <span class="font-medium text-gray-700">Length:</span>
            <p>{{ product.length }}</p>
          </div>
          <div>
            <span class="font-medium text-gray-700">Closure:</span>
            <p>{{ product.closure }}</p>
          </div>
        </div>

        <!-- Product Description -->
        <p class="text-base text-gray-600">{{ product.description }}</p>

        <!-- Color Options -->
        <div v-if="product.colors && product.colors.length > 0">
          <p class="text-lg font-medium text-gray-900 mb-3">Color Options</p>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="(color, index) in product.colors"
              :key="index"
              @click="selectedColorIndex = index"
              :class="[
                'w-12 h-12 rounded-full focus:outline-none transition-all duration-200',
                color.class,
                { 'ring-2 ring-purple-600 ring-offset-2 scale-110': index === selectedColorIndex }
              ]"
              :title="color.name"
            >
              <span class="sr-only">{{ color.name }}</span>
            </button>
          </div>
          <p class="mt-2 text-sm text-gray-600">Selected: {{ product.colors[selectedColorIndex].name }}</p>
        </div>
        
        <!-- Quantity Selection -->
        <div>
          <p class="text-lg font-medium text-gray-900 mb-3">Quantity</p>
          <div class="flex">
            <button 
              @click="quantity > 1 ? quantity-- : null"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-l text-gray-700"
            >−</button>
            <input 
              id="quantity" 
              v-model="quantity" 
              type="number" 
              min="1" 
              class="w-16 text-center border-gray-200 border-t border-b focus:ring-purple-500 focus:border-purple-500"
            >
            <button 
              @click="quantity++"
              class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r text-gray-700"
            >+</button>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <button
          @click="addToCart"
          class="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-medium flex items-center justify-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Add to Cart</span>
        </button>

        <!-- Handcrafted Badge -->
        <div class="flex items-center space-x-2 text-sm text-gray-600 border-t border-b border-gray-200 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <span>Handcrafted with care | Unique Piece | Artisan Made</span>
        </div>

        <!-- Expandable Sections -->
        <div class="space-y-2 mt-4">
          <div
            v-for="section in product.sections"
            :key="section.name"
            class="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div
              @click="toggleSection(section.name)"
              class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            >
              <h2 class="text-lg font-medium text-gray-900">{{ section.name }}</h2>
              <span class="text-xl text-gray-600">
                {{ expandedSections.includes(section.name) ? '−' : '+' }}
              </span>
            </div>
            <div
              v-if="expandedSections.includes(section.name)"
              class="p-4 bg-gray-50 border-t border-gray-200"
            >
              <ul
                v-if="Array.isArray(section.content)"
                class="list-disc pl-5 space-y-1"
              >
                <li v-for="(item, idx) in section.content" :key="idx" class="text-gray-600">{{ item }}</li>
              </ul>
              <p v-else class="text-gray-600">{{ section.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-8">
      <p>Product not found.</p>
      <button @click="goBack" class="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Return to Shop</button>
    </div>
  </div>
</template>

<style scoped>
/* Add subtle animation for hover states */
.product-image-container {
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  max-height: 500px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  transition: transform 0.4s ease;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-image-container:hover .product-image {
  transform: scale(1.05);
}

/* Add a loading state indicator */
.product-image-container::before {
  content: "Loading...";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
  z-index: -1;
}

.broken-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
