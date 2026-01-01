import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import playwright from 'eslint-plugin-playwright';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import { globalIgnores } from 'eslint/config';
import tsEslint from 'typescript-eslint';

export default tsEslint.config([
  globalIgnores([
    '**/node_modules',
    '**/out',
    '**/playwright-report',
    '**/.next',
    '**/test-results',
  ]),
  {
    extends: [
      next,
      nextCoreWebVitals,
      prettierPlugin,
      perfectionist.configs['recommended-natural'],
      eslint.configs.recommended,
      tsEslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      import: importPlugin,
      'prefer-arrow-functions': preferArrowFunctions,
      'unused-imports': unusedImports,
    },
    rules: {
      // Code style
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'multi-or-nest', 'consistent'],
      'object-shorthand': 'error',
      'prefer-arrow-functions/prefer-arrow-functions': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      // Comment style
      '@stylistic/multiline-comment-style': [
        'error',
        'starred-block',
      ],
      '@stylistic/spaced-comment': ['error', 'always'],
      'capitalized-comments': 'error',
      'no-warning-comments': 'warn',

      // TypeScript
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-vars': 'off',

      // React
      'react-hooks/set-state-in-effect': 'warn',
      'react/destructuring-assignment': [
        'error',
        'always',
        { destructureInSignature: 'always', ignoreClassFields: true },
      ],
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',

      // Next
      '@next/next/no-img-element': 'off',

      // Imports & exports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      'import/consistent-type-specifier-style': [
        'error',
        'prefer-inline',
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              importNames: ['default'],
              name: 'react',
            },
          ],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: ['^react$', '^react-dom$'],
              groupName: 'react',
            },
            {
              elementNamePattern: ['^next$', '^next/.*$'],
              groupName: 'next',
            },
          ],
          groups: [
            'side-effect',
            'builtin',
            'react',
            'next',
            ['external', 'type-external'],
            ['internal', 'type-internal'],
            ['parent', 'type-parent'],
            ['sibling', 'type-sibling'],
            'style',
            'unknown',
          ],
          newlinesBetween: 1,
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          groups: ['value-export', 'type-export'],
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          groups: ['value-import', 'type-import'],
          order: 'asc',
          type: 'natural',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
      },
    },
  },
  // Some files are expected to have default exports
  {
    files: ['./pages/**/*.tsx', '**/*.config.@(ts|js|mjs)'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  // Disable comment style rules for declaration files
  {
    files: ['**/*.d.ts'],
    rules: {
      'capitalized-comments': 'off',
      'multiline-comment-style': 'off',
      'spaced-comment': 'off',
    },
  },
  // E2E tests with Playwright
  {
    files: ['**/e2e/?(*.)+(test).[jt]s?(x)'],
    ...playwright.configs['flat/recommended'],
  },
]);
