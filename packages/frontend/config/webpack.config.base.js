var path = require('path')

var dir = path.resolve(__dirname, "../")
var dirMono = path.resolve(__dirname, "../../../")
global.dir = dir
global.dirMono = dirMono

var config = {
  context: dir,
  devtool: '#source-map',
  resolve: {
    alias: {
      'xt': dir + '/src/core/index.js',
      'plugins': dir + '/src/plugins',
    },
  },
}

module.exports = config
