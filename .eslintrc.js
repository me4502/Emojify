module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: true,
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports' },
        ],
        '@typescript-eslint/consistent-type-exports': [
            'error',
            { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
    },
};
