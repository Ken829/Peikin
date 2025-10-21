import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/Peikin/',  // '/Peikin/' for dev/default URL, '/' for production/custom domain
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: '',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucid-react'],
  },
})
