<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="closeMobileMenu">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <div class="space-y-6 px-4 py-6">
                <div class="flow-root">
                  <RouterLink to="/products" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Shop</RouterLink>
                </div>
                <div class="flow-root">
                  <RouterLink to="/about" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">About Us</RouterLink>
                </div>
                <div class="flow-root">
                  <RouterLink to="/contact" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Contact</RouterLink>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <RouterLink v-if="!authStore.user" to="/login" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Sign in</RouterLink>
                  <div v-else class="space-y-2">
                    <div class="-m-2 block p-2 font-medium text-gray-900">{{ authStore.user.displayName || authStore.user.email }}</div>
                    <RouterLink to="/account" class="-m-2 block p-2 text-sm text-gray-600 hover:text-gray-900 pl-4" @click="closeMobileMenu">Account</RouterLink>
                    <RouterLink to="/admin" class="-m-2 block p-2 text-sm text-gray-600 hover:text-gray-900 pl-4" @click="closeMobileMenu">Shop Manager</RouterLink>
                    <button @click="logout" class="-m-2 block p-2 text-sm text-gray-600 hover:text-gray-900 pl-4 w-full text-left">Logout</button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="sticky top-0 z-40 bg-white">
      <p class="flex h-10 items-center justify-center bg-gray-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" aria-live="polite">Free shipping on orders over $100</p>

      <div class="border-b border-gray-200 bg-white shadow-sm transition-shadow duration-300" :class="{'shadow-md': isScrolled}">
        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center">
            <button 
              type="button" 
              class="relative rounded-md bg-white p-2 text-gray-400 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden" 
              @click="toggleMobileMenu" 
              aria-expanded="false" 
              :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Toggle menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <RouterLink to="/" class="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md">
                <span class="sr-only">Beabed Art</span>
                <h1 class="text-2xl font-bold text-gray-800">Beabed Art</h1>
              </RouterLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <RouterLink 
                  to="/products" 
                  class="flex items-center text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-800 py-2 text-gray-700 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md" 
                  :class="{ 'border-gray-800 text-gray-900': isCurrentRoute('/products') }" 
                  active-class="border-gray-800 text-gray-900"
                >Shop</RouterLink>
                <RouterLink 
                  to="/about" 
                  class="flex items-center text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-800 py-2 text-gray-700 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md" 
                  :class="{ 'border-gray-800 text-gray-900': isCurrentRoute('/about') }" 
                  active-class="border-gray-800 text-gray-900"
                >About Us</RouterLink>
                <RouterLink 
                  to="/contact" 
                  class="flex items-center text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-gray-800 py-2 text-gray-700 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md" 
                  :class="{ 'border-gray-800 text-gray-900': isCurrentRoute('/contact') }" 
                  active-class="border-gray-800 text-gray-900"
                >Contact</RouterLink>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <RouterLink 
                  v-if="!authStore.user" 
                  to="/login" 
                  class="text-sm font-medium text-gray-700 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md transition-colors duration-200"
                >Sign in</RouterLink>
                <Menu v-else as="div" class="relative ml-3">
                  <div>
                    <MenuButton class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md transition-colors duration-200">
                      <span class="sr-only">Open user menu for </span>
                      {{ authStore.user.displayName || authStore.user.email }}
                      <ChevronDownIcon class="ml-1 h-5 w-5" aria-hidden="true" />
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem v-slot="{ active }">
                        <RouterLink to="/account" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Account</RouterLink>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <RouterLink to="/admin" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Shop Manager</RouterLink>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <button @click="logout" :class="[active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700']">Logout</button>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <RouterLink to="/cart" class="group -m-2 flex items-center p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded-md">
                  <ShoppingBagIcon class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span v-if="itemCount > 0" class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {{ itemCount }}
                  </span>
                  <span class="sr-only">items in cart, view bag</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from '@headlessui/vue'
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const cartStore = useCartStore()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const itemCount = computed(() => cartStore.itemCount)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const logout = async () => {
  await authStore.logout()
  closeMobileMenu()
  router.push('/')
}

const isCurrentRoute = (path) => {
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Close mobile menu when route changes or on large screens
onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      mobileMenuOpen.value = false
    }
  })
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Add this to improve focus visibility only for keyboard navigation */
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}
</style>