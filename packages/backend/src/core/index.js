import {ext, loader} from 'xtpoints'
import Bottle from 'bottlejs'
import config from 'config'
import dbAdapter from './db'
import path from 'path'

// connection
const db = dbAdapter(config)

// container
const di = new Bottle()

// add config & db to the di container
di.service('config', (): object => config)
di.service('db', (): object => db)

// could be on config
di.service('path', (): object => {
  return {
    path: path,
    root: path.resolve(__dirname + '../../../'),
    src: path.resolve(__dirname + '../../'),
  }
})

// load plugins
// only load sweetjs on fun environment for now
let modulesContext
if (process.env.NODE_ENV === 'fun')
  modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.s?js$/)
else
  modulesContext = require.context('../plugins', true, /^\.\/[^\/]+?\/bundle(.*)\.js$/)
loader(modulesContext, __webpack_require__, ext, di, config, db)

// @NOTE: config and db could be plugins
const externalApi = {
  ext: ext,
  di: di,
  config: config,
  db: db,
}

export default externalApi
export {ext, di, config, db}
