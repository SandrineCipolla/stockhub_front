import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: parseInt(process.env.VITE_SERVER_PORT),
    host: process.env.VITE_SERVER_NAME,
    https: {
      key: path.resolve(__dirname, "server.key"),
      cert: path.resolve(__dirname, "server.cert"),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
