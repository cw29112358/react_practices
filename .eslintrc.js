module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "airbnb/hooks"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: { request: true },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "no-console": 1,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "import/no-extraneous-dependencies": 0,
    "global-require": 0,
    "react/prop-types": 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "no-plusplus": 0,
    "func-names": 0,
    "no-continue": 0,
    "linebreak-style": 0,
  },
};
