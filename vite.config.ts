import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pekin/',  // Match your repo name for GitHub Pages default URL
  optimizeDeps: {
    exclude: ['lucid-react'],  // Keep this if needed for your project
  },
})
