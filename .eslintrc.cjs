module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true, commonjs: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'unused-imports'
  ],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    quotes: ['warn', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'always'],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'prettier/prettier': 'warn',
  },
};