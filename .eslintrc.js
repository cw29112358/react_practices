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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
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
    'react/react-in-jsx-scope': 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "camelcase": 0,
    "no-underscore-dangle": 0,
  },
};
