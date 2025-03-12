<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Animation element for cart add effect -->
    <div 
      v-if="animatingItem" 
      class="cart-animation fixed pointer-events-none z-50" 
      ref="cartAnimationEl"
      :style="{ backgroundImage: `url(${animatingItem?.imageUrl || animatingItem?.image})` }">
    </div>
    
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Stylish Beaded Jewelry Collection</h1>
            <p class="mt-4 text-xl text-gray-500">Our handcrafted beaded jewelry pieces combine artistry and elegance, adding the perfect colorful accent to enhance any outfit.</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <router-link to="/products" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Collections</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Collection Card for each category -->
          <div v-for="collection in collections" :key="collection.name" 
            class="collection-card relative overflow-hidden rounded-lg shadow-lg group h-80">
            
            <!-- Collection Image -->
            <img :src="collection.image" :alt="collection.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            
            <!-- Overlay with content that appears on hover -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-center items-center p-6">
              
              <!-- Collection name and description - visible on hover -->
              <div class="text-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 class="text-white text-2xl font-bold mb-2">{{ collection.name }}</h3>
                <p class="text-white text-sm mb-4">{{ collection.description }}</p>
                <router-link :to="`/products?category=${collection.category}`" 
                  class="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-300">
                  View Collection
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900">Featured Products</h2>
          <router-link to="/products" class="text-indigo-600 hover:text-indigo-800 font-medium">
            View all products <span aria-hidden="true">&rarr;</span>
          </router-link>
        </div>
        
        <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
        
        <div v-else-if="featuredProducts.length === 0" class="text-center py-12">
          <p class="text-gray-500">No products found. Please check back later.</p>
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Product Features Section -->
    <section class="bg-white">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Craftsmanship Details</h2>
          <p class="mt-4 text-gray-500">Our handcrafted beaded jewelry combines traditional techniques with modern design. Each piece is meticulously created using premium materials, ensuring both beauty and durability for everyday wear.</p>
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Close-up of beaded bracelet showing intricate pattern work." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Detail view of beaded necklace clasp and finishing." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Arrangement of colorful beads used in our jewelry collection." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Handcrafting process showing artisan creating a beaded piece." class="rounded-lg bg-gray-100" />
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="relative py-16 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTAgMGg0djRIMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div class="container relative mx-auto px-6 max-w-5xl">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <!-- Left side - Text content -->
          <div class="w-full md:w-1/2 text-white">
            <span class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-4">
              Stay Connected
            </span>
            <h3 class="text-3xl md:text-4xl font-bold mb-4">Join Our Jewelry Community</h3>
            <p class="text-white text-opacity-90 mb-6 max-w-md">
              Subscribe to receive updates on new collections, exclusive offers, and styling tips directly to your inbox.
            </p>
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 mr-2">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p class="text-sm">Early access to sales</p>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0 mr-2">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p class="text-sm">Exclusive offers</p>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0 mr-2">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <p class="text-sm">Jewelry care tips</p>
              </div>
            </div>
          </div>
          
          <!-- Right side - Form -->
          <div class="w-full md:w-1/2">
            <div class="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <form @submit.prevent="subscribeToNewsletter" class="space-y-4">
                <h4 class="text-gray-800 text-xl font-semibold mb-4">Subscribe to our newsletter</h4>
                <div>
                  <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    v-model="newsletter.name" 
                    placeholder="Enter your name" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="newsletter.email" 
                    required
                    placeholder="Enter your email" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  >
                </div>
                <div class="pt-2">
                  <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
                    :class="{'opacity-75 cursor-not-allowed': newsletter.loading}"
                    :disabled="newsletter.loading"
                  >
                    <svg v-if="newsletter.loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{{ newsletter.loading ? 'Subscribing...' : 'Subscribe Now' }}</span>
                  </button>
                </div>
                <p v-if="newsletter.message" :class="{'text-green-600': newsletter.success, 'text-red-600': !newsletter.success}" class="text-sm mt-2 text-center">
                  {{ newsletter.message }}
                </p>
                <p class="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { firebaseService } from '../services/firebaseService'
import { useCartStore } from '@/stores/cart'
import { mockDataLoader } from '../utils/mockDataLoader'
import ProductCard from '@/components/ProductCard.vue'

const newCollection = ref([])
const trending = ref([])
const featuredProducts = ref([])
const loading = ref(true)
const cartStore = useCartStore()
const animatingItem = ref(null)
const cartAnimationEl = ref(null)

// Blog posts data
const blogPosts = ref([
  { id: 1, title: 'Blog Post 1', excerpt: 'Lorem ipsum dolor sit amet...', image: 'https://via.placeholder.com/400x200?text=Blog+1' },
  { id: 2, title: 'Blog Post 2', excerpt: 'Consectetur adipiscing elit...', image: 'https://via.placeholder.com/400x200?text=Blog+2' },
  { id: 3, title: 'Blog Post 3', excerpt: 'Sed do eiusmod tempor...', image: 'https://via.placeholder.com/400x200?text=Blog+3' },
])

// Callouts data
const callouts = [
  {
    name: 'Beaded Bracelets',
    description: 'Handcrafted wrist art',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Collection of colorful beaded bracelets with various designs and patterns.',
    href: '#',
  },
  {
    name: 'Statement Necklaces',
    description: 'Elegant beaded necklaces featuring unique pendant designs and colorful bead work.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Elegant beaded necklaces featuring unique pendant designs and colorful bead work.',
    href: '#',
  },
  {
    name: 'Beaded Earrings',
    description: 'Collection of handcrafted beaded earrings with intricate patterns.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of handcrafted beaded earrings with intricate patterns.',
    href: '#',
  },
]

// Features data
const features = [
  { name: 'Materials', description: 'Premium glass beads, natural gemstones, and sterling silver components' },
  { name: 'Craftsmanship', description: 'Each piece handcrafted by skilled artisans using traditional techniques' },
  { name: 'Customization', description: 'Available in various sizes, colors, and custom designs upon request' },
  { name: 'Durability', description: 'Double-knotted silk thread and reinforced clasps for everyday wear' },
  { name: 'Care', description: 'Store in provided pouch, avoid water exposure, and clean with soft dry cloth' },
  { name: 'Sustainability', description: 'Ethically sourced materials and eco-friendly packaging' },
]

// Collections data
const collections = ref([
  {
    name: 'Rings',
    description: 'Exquisite engagement rings, wedding bands, and statement pieces crafted with precision and passion.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'rings'
  },
  {
    name: 'Necklaces',
    description: 'Elegant pendants and chains designed to complement any outfit and occasion.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'necklaces'
  },
  {
    name: 'Earrings',
    description: 'From subtle studs to dramatic drops, find the perfect accent for your personal style.',
    image: 'https://images.unsplash.com/photo-1610694955371-d4a3f5146182?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'earrings'
  },
  {
    name: 'Bracelets',
    description: 'Add sparkle to your wrist with our selection of charm bracelets, bangles, and cuffs.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'bracelets'
  },
  {
    name: 'Watches',
    description: 'Precision timepieces that combine functionality with sophisticated design.',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'watches'
  },
  {
    name: 'Luxury Collection',
    description: 'Exclusive high-end pieces for those special moments that deserve extraordinary jewelry.',
    image: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'luxury'
  },
])

// Function to provide fallback products if data loading fails
function getFallbackProducts() {
  return [
    {
      id: 'fallback-1',
      name: 'Diamond Ring',
      category: 'rings',
      price: 1299.99,
      imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fallback-2',
      name: 'Pearl Necklace',
      category: 'necklaces',
      price: 499.99,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fallback-3',
      name: 'Gold Earrings',
      category: 'earrings',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1610694955371-d4a3f5146182?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fallback-4',
      name: 'Silver Bracelet',
      category: 'bracelets',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
}

onMounted(async () => {
  try {
    let products;
    
    // Try to get products from Firebase first
    try {
      products = await firebaseService.getProducts();
      console.log('Products loaded from Firebase:', products);
    } catch (firebaseError) {
      console.warn('Firebase fetch failed, using mock data:', firebaseError);
      products = await mockDataLoader.getProducts();
    }
    
    // Make sure we have products before proceeding
    if (!products || products.length === 0) {
      console.warn('No products found in primary source, using fallback data');
      products = getFallbackProducts();
    }
    
    // Map products to ensure they have all required fields
    const mappedProducts = products.map(product => ({
      ...product,
      // Ensure all necessary fields exist with fallbacks
      id: product.id || `prod-${Math.random().toString(36).substr(2, 9)}`,
      name: product.name || 'Unnamed Product',
      category: product.category || 'general',
      price: product.price || 99.99,
      imageUrl: product.imageUrl || product.image || 'https://via.placeholder.com/400x300?text=Product+Image'
    }));
    
    newCollection.value = mappedProducts.slice(0, 4);
    trending.value = mappedProducts.slice(4, 8);
    featuredProducts.value = mappedProducts
      .filter(product => product.featured || Math.random() > 0.5)
      .slice(0, 8);
      
    console.log('Featured products:', featuredProducts.value);
  } catch (error) {
    console.error('Error loading products:', error);
    featuredProducts.value = getFallbackProducts();
  } finally {
    loading.value = false;
  }
});

// Newsletter form data
const newsletter = ref({
  name: '',
  email: '',
  loading: false,
  success: false,
  message: ''
})

// Function to handle newsletter subscription
const subscribeToNewsletter = async () => {
  if (!newsletter.value.email) return;
  
  newsletter.value.loading = true;
  newsletter.value.message = '';
  
  try {
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend/API
    // await firebaseService.subscribeToNewsletter(newsletter.value.email, newsletter.value.name);
    
    newsletter.value.success = true;
    newsletter.value.message = 'Thank you for subscribing to our newsletter!';
    newsletter.value.name = '';
    newsletter.value.email = '';
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    newsletter.value.success = false;
    newsletter.value.message = 'Failed to subscribe. Please try again later.';
  } finally {
    newsletter.value.loading = false;
  }
}

const addToCart = async (product) => {
  // Get button position as starting point
  const buttonRect = event.target.getBoundingClientRect();
  const startX = buttonRect.left + (buttonRect.width / 2);
  const startY = buttonRect.top + (buttonRect.height / 2);
  
  // Get cart icon position as ending point
  const cartIcon = document.querySelector('.group-hover\\:text-gray-500') || 
                   document.querySelector('a[href="/cart"] svg');
  let endX = window.innerWidth - 60;
  let endY = 20;
  
  if (cartIcon) {
    const cartRect = cartIcon.getBoundingClientRect();
    endX = cartRect.left + (cartRect.width / 2);
    endY = cartRect.top + (cartRect.height / 2);
  }
  
  // Start animation
  animatingItem.value = product;
  
  await nextTick();
  if (cartAnimationEl.value) {
    // Set initial position
    cartAnimationEl.value.style.top = `${startY}px`;
    cartAnimationEl.value.style.left = `${startX}px`;
    cartAnimationEl.value.style.opacity = '1';
    cartAnimationEl.value.style.transform = 'scale(1)';
    
    // Trigger animation
    setTimeout(() => {
      cartAnimationEl.value.style.top = `${endY}px`;
      cartAnimationEl.value.style.left = `${endX}px`;
      cartAnimationEl.value.style.opacity = '0';
      cartAnimationEl.value.style.transform = 'scale(0.3)';
    }, 50);
    
    // Add to cart after animation
    setTimeout(() => {
      cartStore.addToCart(product, 1);
      animatingItem.value = null;
    }, 600);
  } else {
    // Fallback if animation element is not available
    cartStore.addToCart(product, 1);
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
.collection-card {
  transition: all 0.3s ease;
}

.collection-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Cart animation styles */
.cart-animation {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 9999;
  position: fixed;
  pointer-events: none;
}
</style>