const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackCommonConfig = require("./webpack.common");
const devServer = require("./devServer.config");
const { siteTitle } = require("./projectConfig");

const { loader: exLoader } = MiniCssExtractPlugin;

module.exports = webpackMerge(webpackCommonConfig, {
  output: {
    filename: "assets/js/[name].bundle.js",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: [/\.css$/],
        use: [
          {
            loader: exLoader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]-[hash:base64:10]"
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: [/\.less$/],
        use: [
          {
            loader: exLoader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]-[hash:base64:10]"
              }
            }
          },
          "less-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      filename: "dev.html",
      template: "./template/dev.html",
      title: siteTitle
    })
  ],
  devtool: "inline-source-map",
  mode: "development",
  devServer
});
