import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: "brotliCompress" }), // Enable Brotli compression
  ],
  build: {
    minify: "esbuild", // Use esbuild for fast minification
    sourcemap: false, // Disable source maps for production (optional)
  },
  base: "/Abdul_Samad/",
});
