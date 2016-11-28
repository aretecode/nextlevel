var _ = require('lodash')
var path = require('path')
var config = require('./webpack.config.base')

var dirMono = path.resolve(__dirname, "../../../")
var nodeConfig = require(dirMono + '/config/build/node.js')
var config = require('./webpack.config.base.js')

_.defaultsDeep(config, nodeConfig)

export default config
