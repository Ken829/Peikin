import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pekin/',  // Add this for GitHub Pages asset paths
  exclude: ['lucid-react'],  // Keep this if needed
})
