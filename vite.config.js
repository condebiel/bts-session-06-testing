import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    exclude: ['node_modules'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
    globals: true,
    include: ['./tests/**/*.test.js', './src/**/*.test.js'],
    setupFiles: './test.config.ts',
  },
})
