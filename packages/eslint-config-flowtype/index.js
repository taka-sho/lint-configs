/* @flow */
module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'flowtype'
  ],
  'extends': [
    '@takasho/eslint-config',
    'plugin:flowtype/recommended'
  ]
}
