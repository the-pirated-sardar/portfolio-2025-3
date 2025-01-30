/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverBuildTarget: "netlify", // Netlify-specific build target
    server: "@remix-run/node",
    ignoredRouteFiles: ["**/.*"],
  };
  