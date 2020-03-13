const webpackMerge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyCss = require("optimize-css-assets-webpack-plugin");
const safeParser = require("postcss-safe-parser");
const webpackBuildConfig = require("./webpack.build");

module.exports = webpackMerge(webpackBuildConfig, {
  optimization: {
    splitChunks: {
      name: "vendors", // //
      chunks: "initial"
    },
    runtimeChunk: {
      name: "runtime" // //
    },
    minimize: true,
    minimizer: [
      new UglifyCss({
        cssProcessorOptions: {
          parser: safeParser,
          discardComments: { removeAll: true }
        }
      }),
      new TerserPlugin({
        exclude: /\.min\.js$/,
        test: /\.jsx?$/i,
        extractComments: false,
        terserOptions: {
          warnings: false,
          output: {
            comments: false
          },
          compress: {
            drop_console: true,
            drop_debugger: true,
            unused: true,
            warnings: false
          }
        }
      })
    ]
  }
});
