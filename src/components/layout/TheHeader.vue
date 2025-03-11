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
                  <RouterLink to="/products" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Collections</RouterLink>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Contact</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <RouterLink v-if="!authStore.user" to="/login" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Sign in</RouterLink>
                  <RouterLink v-else to="/account" class="-m-2 block p-2 font-medium text-gray-900" @click="closeMobileMenu">Account</RouterLink>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <p class="flex h-10 items-center justify-center bg-gray-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Free shipping on orders over $100</p>

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="toggleMobileMenu">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <RouterLink to="/" class="inline-block">
                <span class="sr-only">Beabed Art</span>
                <h1 class="text-2xl font-bold text-gray-800">Beabed Art</h1>
              </RouterLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <RouterLink to="/products" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Shop</RouterLink>
                <RouterLink to="/products" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Collections</RouterLink>
                <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact</a>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <RouterLink v-if="!authStore.user" to="/login" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</RouterLink>
                <RouterLink v-else to="/account" class="text-sm font-medium text-gray-700 hover:text-gray-800">Account</RouterLink>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <RouterLink to="/cart" class="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span v-if="itemCount > 0" class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {{ itemCount }}
                  </span>
                  <span class="sr-only">items in cart, view bag</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { ref, computed, onMounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  XMarkIcon 
} from '@heroicons/vue/24/outline'

const authStore = useAuthStore()
const cartStore = useCartStore()
const mobileMenuOpen = ref(false)

const itemCount = computed(() => cartStore.itemCount)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when route changes or on large screens
onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) { // Changed from 768 to 1024 to match lg breakpoint
      mobileMenuOpen.value = false
    }
  })
})
</script>