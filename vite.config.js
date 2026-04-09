import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API calls to Flask backend during development
    proxy: {
      '/contact': 'http://localhost:5000',
      '/download-cv': 'http://localhost:5000',
    }
  }
})
