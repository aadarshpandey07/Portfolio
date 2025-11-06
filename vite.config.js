import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Increase warning threshold (optional)
    chunkSizeWarningLimit: 1000,
    // Minify and strip console/debugger from production builds
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Split large vendor bundles (three, react, etc.) into separate chunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("three-stdlib")) {
              return "three-vendor";
            }
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
  },
});
