const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require('path');
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "app2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    
    
  });
};
