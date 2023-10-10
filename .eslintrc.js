module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/standard",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {},
};
