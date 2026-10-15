import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: /fizza-yousaf-portfolio/
// For Vercel, set VITE_DEPLOY_TARGET=vercel in its environment settings.
const isVercel = process.env.VITE_DEPLOY_TARGET === 'vercel'
export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/fizza-yousaf-portfolio/',
})
