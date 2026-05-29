import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwendcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwendcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
