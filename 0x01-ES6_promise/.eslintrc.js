module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
  },
};
