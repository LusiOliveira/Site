import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { imagetools } from "vite-imagetools";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      // Cache agressivo para assets fingerprintados do Vite
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname.startsWith("/assets/"),
          handler: "CacheFirst",
          options: {
            cacheName: "assets-cache",
            expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "image",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "images-cache",
            expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
          },
        },
      ],
      manifest: {
        name: "IERD Amazônia Connect",
        short_name: "IERD",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0f172a",
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
