module.exports = {
  extends: 'airbnb-base',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': 'webpack'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'jest',
    'jest-dom',
    'testing-library'
  ],
  globals: {
    document: true,
    window: true,
    location: true,
  },
  rules: {
    semi: ['error', 'never'],
    'one-var': ['error', 'always'],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, minProperties: 4 },
    }],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', {
      functions: 'never',
      objects: 'only-multiline',
      exports: 'only-multiline',
      arrays: 'only-multiline',
    }],
    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false
    }],
    'no-nested-ternary': 'error',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-unneeded-ternary': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': ['error', { capIsNew: false }],
    'import/no-named-as-default': 1,
    'class-methods-use-this': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-no-bind': ['warn', { ignoreDOMComponents: false }],
    'max-len': [1, 80, 2, {
      ignorePattern: '^import\\s.+\\sfrom\\s.+$',
      ignoreUrls: true
    }],
    indent: ['error', 2, { VariableDeclarator: 1 }],
    'arrow-parens': ['error', 'as-needed'],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off"
  },
  env: { 'jest/globals': true },
}
