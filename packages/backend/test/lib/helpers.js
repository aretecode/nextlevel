import {di, ext, db, config} from '../../src/core/index'

function getDefaultOptions(path) {
  return {
    host: 'localhost',
    port: config.microservice1.port,
    path: path,
    headers: {},
    method: 'GET',
    agent: false,
  }
}

function postDefaultOptions(path, length, method = 'POST') {
  return {
    host: 'localhost',
    port: config.microservice1.port,
    path: path,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': length,
    },
    method: method,
    agent: false,
  }
}

export default {
  getDefaultOptions,
  postDefaultOptions,
}
export {
  getDefaultOptions,
  postDefaultOptions,
}
