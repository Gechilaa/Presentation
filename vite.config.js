import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Serve assets from the site root on Vercel
  base: '/',
  plugins: [react()],
})
