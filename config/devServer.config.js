const projectConfig = require('./projectConfig');

const { publicPath, port, host } = projectConfig;

module.exports = {
  publicPath,
  compress: true,
  noInfo: false,
  quiet: false,
  hot: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  host,
  port,
  historyApiFallback: {
    rewrites: [
      {
        from: new RegExp(`^${publicPath}`),
        to: `${publicPath}dev.html`,
      },
    ],
  },
  open: true,
  openPage: '',
  inline: true,
  clientLogLevel: 'none',
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   },
  //   https: true,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' }, // 如果后端路由带/api，则不需要该字段，否则打开该行
    },
  },
};
