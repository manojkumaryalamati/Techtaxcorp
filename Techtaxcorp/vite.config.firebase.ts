/**
 * Vite config for Firebase Hosting builds (`npx tsx scripts/build-firebase.ts`).
 * Root is `client/` so output stays `client/dist` (matches `firebase.json` "public").
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(repoRoot, "client");

export default defineConfig({
  base: "/",
  root: clientDir,
  resolve: {
    alias: {
      "@": path.join(clientDir, "src"),
      "@shared": path.join(repoRoot, "shared"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [react()],
});
