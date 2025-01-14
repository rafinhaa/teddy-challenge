import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "components.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Input": "./src/components/Input",
        "./Pagination": "./src/components/Pagination",
        "./SelectPerPage": "./src/components/SelectPerPage",
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
  server: {
    port: 3001,
    host: true,
  },
  preview: {
    port: 3001,
    host: true,
  },
});
