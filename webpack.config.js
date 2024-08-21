const path = require("path");
const { DefinePlugin, ProvidePlugin } = require("webpack");

const scss = {
  main: "./src/main.scss",
  coreCss: "./src/core.scss",
};
const js = {
  core: "./src/core.js",
  frontpage: "./src/js/pages/frontpage.js",
  contentSingle: "./src/js/pages/content-single.js",
};

const config = {
  entry: {
    ...scss,
    ...js,
  },
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
  plugins: [
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "./build"),
    clean: true,
  },
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
  optimization: {
    minimize: false,
    runtimeChunk: "single",
  },
};

module.exports = (webpack, args) => {
  const isProduction = args.mode === "production";

  config.plugins.push(
    new DefinePlugin("process.env.NODE_ENV", JSON.stringify(args.mode)),
  );

  if (isProduction) {
    config.mode = "production";
    delete config.devServer;
    delete config.devtool;
  } else {
    config.mode = "development";
  }

  return config;
};
