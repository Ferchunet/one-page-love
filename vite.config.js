import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/one-page-love/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})


