const path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = {
  entry: {
    main: "./src/main.scss",
    coreCss: "./src/core.scss",
    core: "./src/core.js",
    frontpage: "./src/js/pages/frontpage.js",
    contentSingle: "./src/js/pages/content-single.js",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    clean: true,
  },
  plugins: [
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        type: "asset/resource",
        generator: {
          filename: "[name].css",
        },
        use: [
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
};
