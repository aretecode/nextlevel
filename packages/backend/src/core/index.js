// loader
import {ext} from 'xtpoints'
import Bottle from 'bottlejs'
import config from 'config'
import knex from './db'
import plugins from '../plugins'
import path from 'path'

// connection
const db = knex(config)

// container
const di = new Bottle()

// add config & db to the di container
di.service('config', () => config)
di.service('db', () => db)

// could be on config
di.service('path', () => {
  return {
    path: path,
    root: path.resolve(__dirname + '../../../'),
    src: path.resolve(__dirname + '../../'),
  }
})

// load plugins
plugins(ext, di, config, db)

// @NOTE: config and db could be plugins
const externalApi = {
  ext: ext,
  di: di,
  config: config,
  db: db,
}

export default externalApi
export {ext, di, config, db}
