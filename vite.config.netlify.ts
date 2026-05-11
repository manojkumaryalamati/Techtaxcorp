/**
 * Netlify: some sites still use the build command
 *   `vite build --config vite.config.netlify.ts`
 * (Netlify UI “Build command” overrides `netlify.toml`).
 *
 * Output: `client/dist` — same as `vite.config.firebase.ts` and `client/vite.config.ts`.
 */
export { default } from "./vite.config.firebase";
