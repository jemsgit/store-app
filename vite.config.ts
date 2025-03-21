import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";

function shouldUseMockServer() {
  // return process.env.USE_MOCKS === "1";
  return true;
}

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "src/mocks/devMocks",
      enable: shouldUseMockServer(),
    }),
  ],
  preview: {
    port: 8082,
  },
  server: {
    port: 8082,
  },
}));
