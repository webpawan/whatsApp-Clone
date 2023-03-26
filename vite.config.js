import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://whatsappserver-e6zx.onrender.com/",
  
    },
  },
  plugins: [react()],
});
