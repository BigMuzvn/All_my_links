import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Site GitHub Pages servi depuis /All_my_links/ (page de projet, pas de domaine custom).
export default defineConfig({
  base: "/All_my_links/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
