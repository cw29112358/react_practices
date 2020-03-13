const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { publicPath, siteTitle } = require("./projectConfig");
const webpackCommonConfig = require("./webpack.common");

const filename = "assets/js/[name].[chunkhash:20].js";

const { loader: exLoader } = MiniCssExtractPlugin;

module.exports = webpackMerge(webpackCommonConfig, {
  output: {
    filename,
    chunkFilename: filename, // //
    publicPath: `.${publicPath}`
    // 以下为默认配置
    // pathinfo: false
  },
  module: {
    rules: [
      {
        test: [/\.css$/],
        use: [
          exLoader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: [/\.less$/],
        use: [
          exLoader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/style/[name].[contenthash].css",
      chunkFilename: "assets/style/[name].[contenthash].css",
      ignoreOrder: false
    }),
    new HtmlPlugin({
      template: path.resolve("./template/prod.html"),
      filename: "index.html",
      title: siteTitle,
      // favicon: path.resolve('./src/assets/libs/favicon.ico'),
      minify: {
        removeComments: true, // 清理html中的注释。默认值false
        collapseWhitespace: true, // 清理html中的空格、换行符。默认值false
        removeScriptTypeAttributes: true, // 去掉script标签的type属性。默认值false
        removeStyleLinkTypeAttributes: true, // 去掉style和link标签的type属性。默认值false
        removeAttributeQuotes: true // 移除属性的引号
      }
    })
  ]
});
