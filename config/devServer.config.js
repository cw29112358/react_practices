// const path = require("path");
const projectConfig = require("./projectConfig");

const { publicPath, port, host } = projectConfig;

module.exports = {
  // contentBase: [path.resolve("./dist")],
  port,
  publicPath,
  historyApiFallback: {
    rewrites: [
      {
        from: new RegExp(`^${publicPath}`),
        to: `${publicPath}/dev.html`
      }
    ]
  },
  // host: "0.0.0.0",
  compress: true,
  host,
  hot: true,
  open: true,
  openPage: `${publicPath.slice(1)}`,
  inline: true,
  noInfo: true,
  quiet: true,
  clientLogLevel: "none"
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   },
  //   https: true,
  //   proxy: {
  //     "/api": "http://localhost:8080"
  //   }
};
