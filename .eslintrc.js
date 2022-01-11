module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
    settings: {
        react: {
            pragma: 'React',
            version: '17.0.2',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
            },
            typescript: {},
        },
    },
    rules: {
        indent: [
            2,
            4,
            { SwitchCase: 1 },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': 'off',
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [
            2,
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-empty-interface': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true },
        ],
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/ban-types': 'off',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 5,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 5,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 5,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 5,
                },
            },
        ],
    },
};
