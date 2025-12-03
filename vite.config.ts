import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Detect environment
const isGitHubPages = process.env.VITE_APP_DEPLOY === 'gh-pages'
const isRender = process.env.RENDER === 'true'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages: /SoCE/, Others: /
  base: isGitHubPages ? '/SoCE/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})