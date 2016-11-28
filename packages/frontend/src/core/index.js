import {ext, loader} from 'xtpoints'
const di = {}

const modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.s?js$/)
loader(modulesContext, __webpack_require__, ext, di)

export default {
  ext: ext,
  di: di,
}

export {
  ext,
  di,
}
