export default function plugins(ext, di, config, db) {
  // only load sweetjs on dev for now
  let modulesContext
  if (process.env.NODE_ENV === 'fun') {
    modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.s?js$/)
  }
  else {
    modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.js$/)
  }

  // get the context keys, which would be the the folders of the plugins
  // e.g. ['database', 'experiment', 'errors', 'express', 'helpscout', ...]
  //
  // get their module ids, then require them with __webpack_require__
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
