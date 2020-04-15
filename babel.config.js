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
