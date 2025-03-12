<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    
    <main class="flex-grow">
      <RouterView />
    </main>
    
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
</script>

<style>
@import './assets/main.css';
</style>
