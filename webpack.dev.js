const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 5050,
    historyApiFallback: true,
    static: "./build",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_PATH": "",
    }),
  ],
});
