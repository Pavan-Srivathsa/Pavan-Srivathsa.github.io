import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/',               // user site => keep '/'
  build: { outDir: 'docs' } // ⬅️ important
})
