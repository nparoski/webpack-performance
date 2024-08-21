const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 9000,
    watchFiles: {
      paths: ["./**/*.php", "./build/**/*.css"], // Full page reload when php or css changes
    },
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      logging: "none",
      overlay: {
        warnings: false,
      },
    },
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
  },
});
