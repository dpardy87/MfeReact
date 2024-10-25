const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  port: 9001, // Use 9002 for app2
},
  });
};
