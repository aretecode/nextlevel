// 'quotes': [1, 'single', {'allowTemplateLiterals': true}],
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
module.exports = {
  'plugins': [
    'react',
    'no-for-each',
    'flowtype',
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
    // testing
    'beforeEach': true,
    'before': true,
    'after': true,
    'afterEach': true,
    'describe': true,
    'it': true,

    // debugging & node
    'require': true,
    'debug': true,
    'console': true,
    'process': true,

    // webpack & babel
    '__webpack_require__': true,
    'context': true,

    // extension point global
    'ext': true,

    // build config globals
    'dirMono': true,
    'dir': true,

    // progressive enhancement frontend feature detection
    'feature': true,
  },

  'rules': {
    // for loop fixing
    'no-for-each/no-for-each': 2, // ['error', 'cache-length'],
    'no-for-each/no-for-in': 2, // ['error', 'cache-length'],
    'no-for-each/no-for-of': 2, // ['error', 'cache-length'],

    // syntax prefs ---

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': true,
      },
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'no-underscore-dangle': 0,
    'curly': 0,
    'no-multi-spaces': 0,
    'semi': ['error', 'never'],

    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'never',
    ],
    'space-infix-ops': ['error', {'int32Hint': false}],
    'camelcase': 0,
    'new-cap': 0,
    'no-spaced-func': 2,
    'semi-spacing': 2,
    'key-spacing': [2],
    'indent': ['error', 2],

    // const & spread ---

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true,
    }],

    // nananenano/tsk-tsk ---

    'strict': 1,
    'no-mixed-requires': 0,
    'no-process-exit': 0,
    'no-warning-comments': 0,
    'no-alert': 0,
    'no-debugger': 1,
    'no-empty': 2,
    'no-invalid-regexp': 1,
    'no-unused-expressions': 1,
    'no-native-reassign': 1,
    'no-fallthrough': 1,
    'handle-callback-err': 1,
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


    // react ---
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


    // flow ---
    'flowtype/boolean-style': [
      2,
      'boolean',
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'never',
    ],
    'flowtype/generic-spacing': [
      2,
      'never',
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-weak-types': 1,
    'flowtype/object-type-delimiter': [
      2,
      'comma',
    ],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        'annotateUndefined': 'never',
      },
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always',
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always',
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never',
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never',
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+Type$',
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always',
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    },
  },
}
