import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: "/index.html",
  },
  preview: {
    port: 4270,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    cache: true,
    minify: true,
    mode: "production",
    chunks: true,
    moduleBundling: true,
    devCode: true,
    debug: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  }
});
