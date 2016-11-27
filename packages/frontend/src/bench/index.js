var context = require.context('./', true, /(.*)\.js$/)
var moduleKeys = context.keys()

for (let i = 0, len = moduleKeys.length; i < len; i++) {
  const file = moduleKeys[i]
  const webpackId = context.resolve(file)
  __webpack_require__(webpackId)
}
