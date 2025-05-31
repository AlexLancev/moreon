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
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {

     'import/order': [
      'error',
      {
        groups: [
          'builtin', // Встроенные модули Node.js
          'external', // Внешние пакеты
          'parent', // Импорты из родительских директорий
          'sibling', // Импорты из соседних директорий
          'index', // Импорты из index.js
          'object', // Объекты
          'type', // Типы
          'unknown', // Неизвестные
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc', // Сортировка по возрастанию
          caseInsensitive: true, // Без учета регистра
        },
      },
    ],
    // Другие правила
    'import/newline-after-import': 'error', // Пустая строка после импортов
    'import/no-duplicates': 'error', // Запрет дублирования импортов
  

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    quotes: ['warn', 'double', { avoidEscape: true, allowTemplateLiterals: true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'always'],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': ['warn', { count: 1 }],
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'prettier/prettier': 'warn',
  },
};
