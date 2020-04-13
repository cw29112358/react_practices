const { resolve } = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.common')

const root = (path) => resolve(__dirname, `../${path}`)

const smp = new SpeedMeasurePlugin()

const { loader: exLoader } = MiniCssExtractPlugin

module.exports = smp.wrap({
  mode: 'production',
  entry: baseConfig.entry,
  output: {
    filename: '[name].js',
    path: root('dist/'),
    publicPath: '',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      ...baseConfig.moduleRules,
      {
        test: /\.css$/,
        loader: [
          exLoader,
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
        test: [/\.less$/],
        include: root('src'),
        loader: [
          exLoader,
          { loader: 'cache-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: baseConfig.postCssOptions,
          },
          'less-loader',
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
    new CleanWebpackPlugin(),
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
    new HtmlPlugin({
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
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
})
