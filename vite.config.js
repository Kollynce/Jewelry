import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Jewelry/', // Replace with your repository name Jewelry
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 600, // Increase from default 500
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url))
      },
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'], // Adjust based on your actual dependencies
          'ui-vendor': ['element-plus', 'primevue'], // Adjust based on your actual UI libraries
          'utils': ['lodash', 'axios'], // Adjust based on your actual utility libraries
        }
      }
    }
  },
  assetsInclude: ['**/*.{png,jpg,jpeg,PNG,JPG,JPEG,gif,svg}'],
  optimizeDeps: {
    include: ['vue']
  }
})
