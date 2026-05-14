/**
 * Sets NODE_ENV for production (Windows-friendly — avoids bash-style `VAR=value cmd`).
 */
process.env.NODE_ENV = "production";

const { spawnSync } = require("node:child_process");
const path = require("node:path");

const entry = path.join(__dirname, "..", "dist", "index.cjs");
const result = spawnSync(process.execPath, [entry], {
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);
