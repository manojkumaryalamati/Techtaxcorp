import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const clientDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  /** Always resolve `index.html` from `client/`, not the repo cwd. */
  root: clientDir,
  resolve: {
    alias: {
      "@": path.join(clientDir, "src"),
      "@shared": path.resolve(clientDir, "../shared"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    /** Avoid clashes on 5173; use a fixed port so the URL never silently changes. */
    port: 5321,
    strictPort: true,
    /** Use loopback explicitly — Windows "localhost" / IPv6 / Cursor preview can mis-route. */
    host: "127.0.0.1",
    open: "http://127.0.0.1:5321/",
  },
  plugins: [
    react(),
    {
      name: "techtaxcorp-print-url",
      configureServer(server) {
        server.httpServer?.once("listening", () => {
          console.log("\n\x1b[36m%s\x1b[0m", "TechTaxCorp — open this exact URL in Chrome or Edge (not a file path):");
          console.log("\x1b[33m%s\x1b[0m\n", "   http://127.0.0.1:5321/");
        });
      },
    },
  ],
});
