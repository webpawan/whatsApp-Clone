import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  server: {
    proxy: {
      "/api": process.env.REACT_APP_API_BASE_URL,
    },
  },
  plugins: [react()],
});
