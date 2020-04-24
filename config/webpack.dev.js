const { resolve } = require('path');
const webpack = require('webpack');
const WebpackNotifier = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common.js');

const root = (path) => resolve(__dirname, `../${path}`);

const config = {
  mode: 'development',
  entry: baseConfig.entry,
  output: {
    filename: '[name].js',
    path: root('build/'),
    publicPath: '/',
    pathinfo: false,
  },
  module: {
    rules: [
      ...baseConfig.moduleRules,
      {
        test: /\.less$/,
        include: root('src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff2?)(\?.+)?$/,
        include: root('src/assets'),
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  optimization: {
    flagIncludedChunks: true,
    occurrenceOrder: true,
    usedExports: true,
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](?!(ace-builds|react-ace|xterm)).*.jsx?$/,
          name: 'vendor',
          priority: 10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000,
        },
      },
    },
  },
  resolve: baseConfig.resolve,
  plugins: [
    ...baseConfig.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.WatchIgnorePlugin([
      root('server'),
      root('build'),
      root('dist'),
    ]),
    new WebpackNotifier({
      title: 'JM',
      alwaysNotify: true,
      excludeWarnings: true,
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'dev.html',
      template: root('template/dev.html'),
      title: 'JM',
    }),
  ],
  devServer: {
    publicPath: '/',
    compress: true,
    noInfo: false,
    quiet: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: 'localhost',
    port: 8001,
    historyApiFallback: {
      rewrites: [
        {
          from: '/',
          to: '/dev.html',
        },
      ],
    },
  },
};

module.exports = config;
