// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginUnicorn.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
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
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
            ],
            '@typescript-eslint/consistent-type-exports': [
                'error',
                { fixMixedExportsWithInlineTypeSpecifier: true },
            ],

            'unicorn/numeric-separators-style': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/filename-case': 'off',
            'unicorn/name-replacements': 'off',
            'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
            'unicorn/no-computed-property-existence-check': 'off',
        },
    }
);
