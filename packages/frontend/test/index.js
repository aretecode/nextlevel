// require all modules ending in ".spec" from the
// current directory and all subdirectories
console.log('trying to require')
var testsContext = require.context(".", true, /.spec$/)
const canada = testsContext.keys()
for (let i = 0, len = canada.length; i < len; i++) {
  const path = canada[i]
  try {
    testsContext(path)
  } catch (err) {
    console.error('[ERROR] WITH SPEC FILE: ', path)
    console.error(err)
  }
}
