# webpack

webpack

webpack-cli

loader

### package.json

```
"scripts": {
    "test": "cross-env BUILD_ENV=test NODE_ENV=production webpack --config config/webpack.test.js --progress",
    "build": "cross-env BUILD_ENV=prod NODE_ENV=production webpack --config config/webpack.prod.js --progress",
    "start": "cross-env BUILD_ENV=dev NODE_ENV=development webpack-dev-server --color --config config/webpack.dev.js --progress"
  }
```

### webpack config

config/webpack.common.js

config/webpack.dev.js

config/webpack.prod.js

config/webpack.build.js

# react

react+react-dom+react-router-dom+redux+react-redux+history+redux-saga

# babel

```
module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/env",
      {
        modules: false,
        targets: {
          browsers: ["ie >= 10"]
        }
      }
    ]
  ],
  <!-- 自定义插件 -->
  plugins: [
    "@babel/transform-runtime",
    [
      "@babel/proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "@babel/proposal-class-properties",
      {
        loose: true
      }
    ]
  ]
};

```

# CSS Modules

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [exLoader, "css-loader"],
        include: /node_modules/
      },
      {
        test: [/\.css$/],
        use: [
          {
            loader: exLoader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [exLoader, "css-loader", "less-loader"],
        include: /node_modules/
      },
      {
        test: [/\.less$/],
        use: [
          {
            loader: exLoader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "less-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/style/[name].[contenthash].css",
      chunkFilename: "assets/style/[name].[contenthash].css",
      ignoreOrder: false
    })
  ]
};
```

# antd

### usage

npm install antd --save

or

yarn add antd

```
// .babelrc or babel-loader option

{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```
