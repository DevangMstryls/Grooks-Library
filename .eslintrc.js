module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    'rules': {
        'prettier/prettier': 'off', // Turn off normal prettier
        'indent': ['error', 4, {
            'SwitchCase': 1,
        }],
        'linebreak-style': ['error', 'unix',],
        'quotes': 'off',
        'semi': ['error', 'always',],
        // ref: https://www.npmjs.com/package/eslint-plugin-react-hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'no-console': 2,
    },
};
