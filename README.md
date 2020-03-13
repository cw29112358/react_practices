# webpack

### 安装依赖

webpack

webpack-cli

cross-env (运行跨平台设置和使用环境变量的脚本)

friendly-errors-webpack-plugin (错误提示插件)

loader:
css：
style-loader
css-loader
less-loader
图片、文件：
file-loader
数据：
csv-loader
xml-loader
babel：
babel-loader

webpack-merge

html-webpack-plugin (简化 HTML 文件的创建以服务您的捆绑软件)

webpack-dev-server (开发环境服务器)

clean-webpack-plugin (用于删除/清理您的构建文件夹)

mini-css-extract-plugin (该插件将 CSS 提取到单独的文件中。它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。它支持 CSS 和 SourceMap 的按需加载)

copy-webpack-plugin (将单个文件或整个目录（已存在）复制到构建目录，该项目没有使用)

uglifyjs-webpack-plugin (缩小 js 体积，未用)

terser-webpack-plugin (缩小 js 体积，使用)

optimize-css-assets-webpack-plugin (优化 css)

postcss-safe-parser (css 容错解析器)

### package.json 文件编写 scripts (合并 webpack 配置)

```
"scripts": {
    "test": "cross-env BUILD_ENV=test NODE_ENV=production webpack --config config/webpack.test.js --progress",
    "build": "cross-env BUILD_ENV=prod NODE_ENV=production webpack --config config/webpack.prod.js --progress",
    "start": "cross-env BUILD_ENV=dev NODE_ENV=development webpack-dev-server --color --config config/webpack.dev.js --progress"
  }
```

### 编写 webpack 配置文件

config/webpack.common.js

config/webpack.dev.js

config/webpack.prod.js

config/webpack.build.js

# react

react
react-dom
react-router-dom
redux
react-redux
history
redux-saga

### history

```
import { createHashHistory } from 'history';

export const history = createHashHistory();

```

# babel

@babel/core (核心包)
@babel/cli (Babel 带有内置 CLI，可用于从命令行编译文件)
@babel/runtime-corejs2 ()
@babel/preset-react (支持所有 react 插件)
@babel/preset-env (可让您使用最新的 JavaScript，而无需微观管理目标环境所需的语法转换（以及可选的浏览器 polyfill）)(A Babel preset for each environment)
@babel/plugin-transform-runtime (每个 Babel 编译后的脚本文件，都以导入的方式使用 Babel 的帮助函数，而不是每个文件都复制一份帮助函数的代码)
@babel/plugin-proposal-decorators (装饰器)
@babel/plugin-proposal-class-properties (此插件可转换静态类属性以及使用属性初始化程序语法声明的属性)

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

### 安装

npm install antd --save

or

yarn add antd

### 按需加载

babel-plugin-import

### 使用 babel-plugin-import（推荐）

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
