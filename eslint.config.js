module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended', // Add this line
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier', // Add this line
    ],
    rules: {
        'react/prop-types': ['error'],
        'no-console': 'warn',
        indent: ['error', 2],
        'prettier/prettier': 'error', // Add this line
    },
};
