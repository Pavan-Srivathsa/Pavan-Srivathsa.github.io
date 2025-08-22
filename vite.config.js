// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [react()],
//   base: '/',               // user site => keep '/'
//   build: { outDir: 'docs' } // ⬅️ important
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // uncomment if you use React

export default defineConfig({
  plugins: [react()],                     // uncomment if you use React
  base: '/',                                 // user site (username.github.io) lives at the root
  build: { outDir: 'docs', emptyOutDir: true }
})
