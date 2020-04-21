# webpack

### package.json

```
"scripts": {
    "test": "cross-env NODE_ENV=production webpack --config config/webpack.test.js --progress",
    "build": "cross-env NODE_ENV=production webpack --config config/webpack.prod.js --progress",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.dev.js --progress"
  },
```

### webpack config

config/webpack.common.js

config/webpack.dev.js

config/webpack.prod.js

### babel

```
module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          browsers: ['ie >= 10'],
        },
      },
    ],
  ],
  plugins: [
    '@babel/transform-runtime',
    [
      '@babel/proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

```

### CSS Modules

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        include: root('src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
};
```

### antd

```
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
```

### 插件介绍
