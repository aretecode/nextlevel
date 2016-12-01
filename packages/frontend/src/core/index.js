import {ext, loader} from 'xtpoints'
import Bottle from 'bottlejs'

// container
const di = new Bottle()

// load & bootstrap the plugins
const modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.s?js$/)
loader(modulesContext, __webpack_require__, ext, di)

export default {
  ext,
  di,
}

export {
  ext,
  di,
}
