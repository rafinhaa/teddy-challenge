import federation from "@originjs/vite-plugin-federation"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        components: "http://localhost:3001/assets/components.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    cors: true,
    proxy: {
      "/api": {
        target: "https://boasorte.teddybackoffice.com.br/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
