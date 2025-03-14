<template>
  <div class="container mx-auto px-4">
    <!-- Hero Section -->
    <section class="text-center py-12 md:py-20">
      <h1 class="text-4xl md:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
        Discover Unique Jewelry
      </h1>
      <p class="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto">
        Explore our collection of handcrafted jewelry pieces that tell a story
      </p>
      <router-link 
        to="/products" 
        class="inline-block bg-btn-primary hover:bg-btn-primary-hover text-white font-bold py-3 px-8 rounded-btn shadow-btn hover:shadow-btn-hover transition-btn"
      >
        Shop Now
      </router-link>
    </section>

    <!-- Featured Products -->
    <section class="py-12">
      <h2 class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 text-center">
        Featured Collection
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in featuredProducts" 
          :key="product.id" 
          :product="product"
          :processImageUrl="processImageUrl"
        />
      </div>
    </section>

    <!-- Categories -->
    <section class="py-12">
      <h2 class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-8 text-center">
        Shop by Category
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="category in categories" 
          :key="category.name" 
          class="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          @click="navigateToCategory(category.name)"
        >
          <img :src="processImageUrl(category.image)" :alt="category.name" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 class="text-white text-xl font-semibold">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-12 bg-light-secondary dark:bg-dark-secondary rounded-lg my-12 p-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
          Our Story
        </h2>
        <p class="text-light-text-secondary dark:text-dark-text-secondary mb-8">
          Every piece in our collection is carefully crafted with attention to detail and quality. 
          We believe in creating jewelry that not only looks beautiful but also tells a unique story.
        </p>
        <router-link 
          to="/about" 
          class="inline-block bg-btn-secondary hover:bg-btn-secondary-hover text-light-text-primary dark:text-dark-text-primary font-semibold py-2 px-6 rounded-btn shadow-btn hover:shadow-btn-hover transition-btn"
        >
          Learn More
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'

const router = useRouter()
const featuredProducts = ref([])
const categories = ref([
  {
    name: 'Rings',
    image: '/images/Golden black.jpeg'
  },
  {
    name: 'Necklaces',
    image: '/images/Golden Green.jpeg'
  },
  {
    name: 'Bracelets',
    image: '/images/Neeon Moon.jpeg'
  }
])

// Function to process image URLs
const processImageUrl = (url) => {
  if (!url) return '/images/no-image.jpg'
  if (url.startsWith('http')) return url
  return url
}

const navigateToCategory = (category) => {
  router.push({
    name: 'products',
    query: { category: category.toLowerCase() }
  })
}

onMounted(async () => {
  try {
    // Simulate fetching featured products
    // Replace this with actual API call in production
    featuredProducts.value = [
      {
        id: 1,
        name: 'Auqa Sand Ring',
        price: 299.99,
        imageUrl: '/images/Auqa Sand.jpeg',
        category: 'Rings'
      },
      {
        id: 2,
        name: 'Neeon Moon Necklace',
        price: 399.99,
        imageUrl: '/images/Neeon Moon 1.jpeg',
        category: 'Necklaces'
      },
      {
        id: 3,
        name: 'Golden Green Bracelet',
        price: 199.99,
        imageUrl: '/images/Golden Green.jpeg',
        category: 'Bracelets'
      },
      {
        id: 4,
        name: 'Aura Sand Earrings',
        price: 249.99,
        imageUrl: '/images/Aura Sand.jpeg',
        category: 'Earrings'
      }
    ]
  } catch (error) {
    console.error('Error loading featured products:', error)
  }
})
</script>