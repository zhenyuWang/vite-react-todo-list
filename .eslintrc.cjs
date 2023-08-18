module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'src/**/*.spec.js',
    'tailwind.config.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
