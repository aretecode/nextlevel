var _ = require('lodash')
var path = require('path')
var dirMono = path.resolve(__dirname, "../../../")
var babel = require('babel-loader-builder')({hot: false, react: true})
var nodeConfig = require(dirMono + '/config/build/node.js')
var config = require('./webpack.config.base.js')

_.defaultsDeep(config, nodeConfig)

// https://github.com/webpack/webpack/blob/master/benchmark/benchmark.js
// https://github.com/bestiejs/benchmark.js/issues/106
// https://github.com/bunkat/benchmark-webpack-babel
// https://github.com/bestiejs/benchmark.js/issues/128
_.defaultsDeep(config, {
  watch: false,

  output: {
    path: dir + '/build/bench',
    filename: 'bench.js',
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [babel],
        include: dir + '/src',
      },
      {
        test: /\.json/, loader: 'json-loader',
      },
    ],
  },

  entry: [
    './src/bench/index',
  ],
})

module.exports = config
