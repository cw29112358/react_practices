const { resolve } = require('path');
const webpack = require('webpack');
const WebpackNotifier = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.common');
const devServer = require('./devServer.config');
const { siteTitle } = require('./projectConfig');

const root = (path) => resolve(__dirname, `../${path}`);

module.exports = {
  entry: baseConfig.entry,
  output: {
    filename: '[name].js',
    path: root('dist/'),
    publicPath: '/',
    pathinfo: false,
  },
  module: {
    rules: [
      ...baseConfig.moduleRules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.less$/],
        include: root('src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: root('src/assets'),
        use: ['file-loader'],
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
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new WebpackNotifier({
      title: 'JIA MING',
      alwaysNotify: true,
      excludeWarnings: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'dev.html',
      template: root('template/dev.html'),
      title: siteTitle,
    }),
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  devServer,
};
