const path = require('path')

module.exports = {
  extends: ['kentcdodds', 'kentcdodds/import', 'kentcdodds/jest'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'babel/no-unused-expressions': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
