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
  plugins: ['react-refresh', '@typescript-eslint', 'import', , 'unused-imports'],
   sortUtilities: (utilities) => {
    const order = [
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',

      'display',
      'flex',
      'grid',
      'align-items',
      'justify-content',
      'margin',
      'padding',
      'border',
      'rounded',
      'width',
      'height',
      'min-width',
      'min-height',
      'max-width',
      'max-height',
      'box-sizing',

      'font',
      'text',
      'line-height',
      'letter-spacing',
      'text-align',
      'text-decoration',
      'color',

      'background',
      'opacity',
      'shadow',

      'transform',
      'transition',
      'animation',
    ];

    return utilities.sort((a, b) => {
      const aIndex = order.indexOf(a.split('-')[0]);
      const bIndex = order.indexOf(b.split('-')[0]);

      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;

      return aIndex - bIndex;
    });
  },
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
        // Правила для удаления неиспользуемых импортов
    'unused-imports/no-unused-imports': 'warn', // Предупреждение (желтый)
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/newline-after-import': ['warn', { count: 1 }],
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'prettier/prettier': 'warn',
  },
};