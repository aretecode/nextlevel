export default function plugins(ext, di, config, db) {
  const modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.js$/)
  const moduleKeys = modulesContext.keys()
  for (let i = 0, len = moduleKeys.length; i < len; i++) {
    const file = moduleKeys[i]
    const moduleId = modulesContext.resolve(file)
    const moduleInstance = __webpack_require__(moduleId) // eslint-disable-line
    if (moduleInstance && moduleInstance.bootstrap && typeof moduleInstance.bootstrap == 'function') {
      moduleInstance.bootstrap(ext, di, db, config)
    }
  }
}
