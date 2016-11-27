// 'quotes': [1, 'single', {'allowTemplateLiterals': true}],
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
module.exports = {
  'plugins': [
    'react',
    'no-for-each',
  ],
  'parser': 'babel-eslint',
  'env': {
    'node': true,
    'browser': true,
    'es6': true,
  },
  'ecmaFeatures': {
    'jsx': true,
    'modules': true,
    'decorators': true,
  },
  'globals': {
    'G': false,
    'beforeEach': true,
    'before': true,
    'after': true,
    'afterEach': true,
    'describe': true,
    'it': true,
    'context': true,
    'debug': true,
    require: true,
    console: true,
    process: true,
    __webpack_require__: true,

    // config globals
    dirMono: true,
    dir: true,

    // progressive enhancement frontend feature detection
    'feature': true,
  },

  // http://eslint.org/docs/rules/comma-dangle
  'comma-dangle': [
    'error',
    'always-multiline',
  ],

  'rules': {
    'no-for-each/no-for-each': 2, // ['error', 'cache-length'],
    'no-for-each/no-for-in': 2, // ['error', 'cache-length'],
    'no-for-each/no-for-of': 2, // ['error', 'cache-length'],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': true,
      },
    ],
    'semi': ['error', 'never'],
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'never',
    ],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true,
    }],
    'space-infix-ops': ['error', {'int32Hint': false}],

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    'strict': 1,
    'no-underscore-dangle': 0,
    'no-mixed-requires': 0,
    'no-process-exit': 0,
    'no-warning-comments': 0,
    'curly': 0,
    'no-multi-spaces': 0,
    'no-alert': 0,

    'no-debugger': 1,
    'no-empty': 2,
    'no-invalid-regexp': 1,
    'no-unused-expressions': 1,
    'no-native-reassign': 1,
    'no-fallthrough': 1,
    'handle-callback-err': 1,
    'camelcase': 0,

    'no-undef': 2,
    'no-dupe-keys': 2,
    'no-empty-character-class': 2,
    'no-self-compare': 2,
    'valid-typeof': 2,
    'no-unused-vars': 2,
    'handle-callback-err': 2,
    'no-shadow-restricted-names': 2,
    'no-new-require': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-console': 0,

    'new-cap': 0,
    'no-spaced-func': 2,
    'semi-spacing': 2,
    'key-spacing': [2],
    'indent': ['error', 2],

    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 2,
  }
}
