var _ = require('lodash')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')
var config = require('./webpack.config.base.node')
var macro = path.resolve(__dirname, './macros.sjs')

config = _.defaultsDeep(config, {
  // issue with webpack2 sourcemaps:
  // `Cannot read property 'sections' of null uglify`
  devtool: 'hidden',

  entry: [
    './src/index.js',
  ],

  module: {
    loaders: [

    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
  ],
})

// http://stackoverflow.com/questions/35678530/using-sweet-js-and-babel
// Module build failed: TypeError: sweet.loadNodeModule is not a function
// had to upgrade another loader https://github.com/aretecode/sweet-js-webpack-loader

config.module.loaders.push({
  test: /\.sjs$/,
  loader: 'sweet-js-webpack-loader' + '?modules[]=' + macro + ',sourceMaps=false',
})

module.exports = config
