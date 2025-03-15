import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: './index.html',
      external: [
        'element-plus'
      ]
    }
  },
  assetsInclude: ['**/*.PNG', '**/*.png'],
  base: process.env.NODE_ENV === 'production' ? '/Jewelry/' : '/'
})