import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import sitemapPlugin from 'vite-plugin-sitemap'

const routes = [
  '/',
]


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://zamsputra.my.id',
      dynamicRoutes: routes
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'r3f': ['@react-three/fiber', '@react-three/drei'],
          'motion': ['motion/react'],
          'router': ['react-router-dom'],
        }
      }
    }
  }
})
