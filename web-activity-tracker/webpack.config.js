const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "web-activity-tracker.js",
    library: "WebActivityTracker",
    libraryTarget: "umd",
  },
  mode: "production",
};
