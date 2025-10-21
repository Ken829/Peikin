import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root for custom domain
  publicDir: 'public',  // Ensure public assets are copied
  build: {
    outDir: 'dist',
    assetsDir: '',  // Assets in root to match base
    emptyOutDir: true,  // Clear dist before build
    manifest: true,  // Generate manifest for debugging (optional)
  },
  optimizeDeps: {
    exclude: ['lucid-react'],
  },
})
