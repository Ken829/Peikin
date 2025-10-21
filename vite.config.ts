import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root for production/custom domain
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: '',  // Assets in root
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Avoid chunking issues
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucid-react'],
  },
})
