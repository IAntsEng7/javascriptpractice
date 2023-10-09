module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:vue/vue3-essential",
        '@vue/standard'  // ** add this for ESLint standard spec **
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    },
    rules: {}, // ** custom rules **
}

//    "eslint:recommended",
//     "plugin:vue/vue3-essential",
//     "plugin:vue/vue3-recommended",
//     "@vue/eslint-config-typescript/recommended",
//     "@vue/eslint-config-prettier",
//     "prettier",