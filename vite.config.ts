import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repo name so asset paths resolve correctly on Pages
export default defineConfig({
  plugins: [react()],
  base: '/qr-hover-demo/',
})
