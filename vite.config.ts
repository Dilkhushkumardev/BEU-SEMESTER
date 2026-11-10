import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/')
          if (normalized.includes('node_modules/katex')) {
            return 'vendor-katex'
          }
          if (normalized.includes('node_modules/react') || normalized.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (normalized.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
          if (normalized.includes('/src/data/')) {
            return 'curriculum-data'
          }
        },
      },
    },
  },
})


