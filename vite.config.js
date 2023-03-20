import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api":
        " https://main--chatappclone01.netlify.app/https://chatclone-6e9i.onrender.com/",
    },
  },
  plugins: [react()],
});
