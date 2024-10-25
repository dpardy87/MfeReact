const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      modules: [
        path.resolve(__dirname, '../node_modules'), // Parent node_modules directory
        'node_modules' // Local node_modules as fallback
      ]
    },
  });
};
