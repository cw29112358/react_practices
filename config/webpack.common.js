const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HappyPack = require('happypack');
const WebpackBar = require('webpackbar');

const root = (path) => resolve(__dirname, `../${path}`);

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  moduleRules: [
    {
      test: /\.jsx?$/,
      include: root('src'),
      use: 'happypack/loader?id=jsx',
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
      test: /\.(jpg|png|svg)(\?.+)?$/,
      include: root('src/assets'),
      use: 'url-loader?limit=100000',
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    symlinks: false,
    modules: [root('src'), root('src/pages'), 'node_modules'],
    alias: {
      src: root('src'),
      assets: root('src/assets'),
      pages: root('src/pages'),
      schema: root('src/schema'),
      components: root('src/components'),
      utils: root('src/utils'),
    },
  },
  plugins: [
    new HappyPack({
      id: 'jsx',
      loaders: ['babel-loader?cacheDirectory'],
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
};
