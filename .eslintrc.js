module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  rules: {
    "no-extra-semi": "warn",
    "quotes": ["warn", "single"],
    "generator-star-spacing": "off",
    "arrow-parens": 0,
    "one-var": 0,
  },
};
