const { resolve } = require('path')
const HappyPack = require('happypack')
const WebpackBar = require('webpackbar')
const autoprefixer = require('autoprefixer')

const root = (path) => resolve(__dirname, `../${path}`)

module.exports = {
  entry: {
    main: './src/index.js',
  },
  moduleRules: [
    {
      test: /\.jsx?$/,
      use: 'happypack/loader?id=jsx',
      include: root('src'),
    },
    {
      test: /\.jsx?$/,
      include: root('node_modules'),
      use: 'cache-loader',
    },
    {
      test: /\.svg$/,
      issuer: { test: /\.jsx?$/ },
      use: [
        { loader: 'cache-loader' },
        { loader: '@svgr/webpack', options: { icon: true } },
      ],
    },
    {
      test: /\.(png|svg|jpg)(\?.+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: 'responsive-loader',
          },
        },
      ],
      include: root('src/assets'),
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
    symlinks: false,
    modules: [root('src'), root('src/pages'), 'node_modules'],
    alias: {
      src: root('src'),
      assets: root('src/assets'),
      containers: root('src/containers'),
      components: root('src/components'),
      schemas: root('src/schemas'),
      utils: root('src/utils'),
    },
  },
  // resolveLoader: { moduleExtensions: ["-loader"] },
  plugins: [
    new HappyPack({
      id: 'jsx',
      loaders: ['babel-loader?cacheDirectory=true'],
    }),
    new WebpackBar(),
  ],
  postCssOptions: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        flexbox: 'no-2009',
      }),
      require('postcss-remove-google-fonts'),
    ],
  },
}
