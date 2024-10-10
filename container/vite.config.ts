import federation from "@originjs/vite-plugin-federation"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        buttons: "http://localhost:3001/assets/buttons.js",
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
  },
})
