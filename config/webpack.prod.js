const { resolve } = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');

const root = (path) => resolve(__dirname, `../${path}`);

const baseConfig = require('./webpack.common.js');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: 'production',
  entry: baseConfig.entry,
  output: {
    filename: '[name].js',
    path: root('dist/'),
    // publicPath: '/dist/',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      ...baseConfig.moduleRules,
      {
        test: /\.less$/,
        include: root('src'),
        loader: [
          MiniCssExtractPlugin.loader,
          { loader: 'cache-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: baseConfig.postCssOptions,
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          { loader: 'cache-loader' },
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
          options: {
            outputPath: '/assets/',
          },
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
    minimize: true,
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
    new ChunkRenamePlugin({
      vendor: '[name].js',
    }),
    new CopyPlugin([{ from: root('src/assets'), to: root('dist/assets') }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[chunkhash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new HtmlWebpackPlugin({
      template: root('template/prod.html'),
      filename: 'index.html',
      title: 'JM',
      minify: {
        removeComments: true, // 清理html中的注释。默认值false
        collapseWhitespace: true, // 清理html中的空格、换行符。默认值false
        removeScriptTypeAttributes: true, // 去掉script标签的type属性。默认值false
        removeStyleLinkTypeAttributes: true, // 去掉style和link标签的type属性。默认值false
        removeAttributeQuotes: true, // 移除属性的引号
      },
    }),
  ],
});
