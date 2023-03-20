import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      " https://main--chatappclone01.netlify.app/api/":
        "https://chatclone-6e9i.onrender.com/",
    },
  },
  plugins: [react()],
});
