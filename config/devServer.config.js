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
  //   proxy: {
  //     "/api": "http://localhost:8080"
  //   }
};
