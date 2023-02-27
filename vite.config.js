import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      // yaha per bas api bala url dedo kam ho gayga 
    },
  },
  plugins: [react()],
});
