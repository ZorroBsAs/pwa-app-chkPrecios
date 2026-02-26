import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
   optimizeDeps: {
    exclude: [
      "scandit-web-datacapture-core",
      "scandit-web-datacapture-barcode"
    ]},
    build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

