import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
  // plugins: [pluginRewriteAll()],
  plugins: [
    react(),
    {
      ...pluginRewriteAll(),
    },
  ],
});
