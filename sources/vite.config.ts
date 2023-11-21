import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      minify: true,
      mode: "production",
      injectRegister: "inline",
      registerType: "autoUpdate",
      useCredentials: true,

      strategies: "generateSW",

      workbox: {
        mode: "production",

        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,

        globPatterns: ["**/*"],
      },
      includeAssets: ["public/*", "public/**/*"],
    }),
    splitVendorChunkPlugin(),
  ],
  base: "/",

  build: {
    outDir: "../",
    emptyOutDir: false,

    manifest: true,
    minify: "esbuild",
    target: "esnext",
    modulePreload: true,

    cssMinify: "esbuild",
    cssCodeSplit: true,
  },
  optimizeDeps: {
    force: true,
  },

  publicDir: "public",
});
