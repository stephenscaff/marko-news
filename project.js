const isProduction = process.env.NODE_ENV === "production";
const cacheProfile =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = require("marko-starter").projectConfig({
  name: "marko-news",
  version: "0.0.1",
  minify: true,
  minifyCss: true,
  minifyJs: true,
  fingerPrintsEnabled: false,
  lassoConfig: {
    bundleReadTimeout: 500000,
    cacheProfile: cacheProfile
  }
});
