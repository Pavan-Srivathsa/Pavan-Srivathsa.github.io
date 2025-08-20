import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If using a *project* site like USERNAME.github.io/repo, set base: '/repo/'
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
