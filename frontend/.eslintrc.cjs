module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      ],
      "react/prop-types": "off",
      "indent": ["error", 2],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "keyword-spacing": ["error", { "before": true }],
      "space-before-function-paren": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "space-infix-ops": "error",
      "comma-spacing": ["error", { "after": true }],
      "brace-style": "error",
      

  },
}
