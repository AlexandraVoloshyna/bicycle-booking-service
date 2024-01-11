module.exports = {
    root: true,
    env: { node: true, es2020: true },
    ignorePatterns: ['.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
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
  