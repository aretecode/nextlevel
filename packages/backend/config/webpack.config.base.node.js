var _ = require('lodash')
var nodeExternals = require('webpack-node-externals')
var config = require('./webpack.config.base')

module.exports = _.defaultsDeep(config, {
  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',

  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
})
