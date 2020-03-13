const webpack = require("webpack");
const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { publicPath, port, distPath, host } = require("./projectConfig");

const { loader: exLoader } = MiniCssExtractPlugin;

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    publicPath, // //
    path: path.resolve(distPath)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [exLoader, "css-loader"],
        include: /node_modules/
      },
      {
        test: /\.less$/,
        use: [exLoader, "css-loader", "less-loader"],
        include: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ["file-loader"]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".less", ".json", ".ts"],
    alias: {
      src: path.resolve("./src"),
      containers: path.resolve("./src/containers"),
      components: path.resolve("./src/components"),
      schemas: path.resolve("./src/schemas"),
      utils: path.resolve("./src/utils")
    }
  },
  // resolveLoader: { moduleExtensions: ["-loader"] },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["编译成功"],
        notes: [`运行于http://${host}:${port}${publicPath}`]
      }
    }),
    // 自定义
    new webpack.DefinePlugin({
      "process.env.IS_DEV": process.env.BUILD_ENV === "dev",
      "process.env.IS_TEST": process.env.BUILD_ENV === "test",
      "process.env.IS_PROD": process.env.BUILD_ENV === "prod"
    })
  ]
};
