/**
 * Ensures NODE_ENV is set when the shell does not (e.g. Windows PowerShell
 * cannot use `NODE_ENV=development command` like bash).
 * Production must set NODE_ENV=production before starting (see package.json "start").
 */
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}
