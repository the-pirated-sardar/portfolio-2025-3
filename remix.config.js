/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverBuildTarget: "node-cjs", // Tells Remix to stop using Cloudflare build settings
    server: "./server.js",
    ignoredRouteFiles: ["**/.*"],
  };
  