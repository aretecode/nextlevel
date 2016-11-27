var _ = require('lodash')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')
var config = require('./webpack.config.base.node')
var uglify = require(dirMono + '/config/build/uglify')

module.exports = _.assign(config, {
  // issue with webpack2 sourcemaps:
  // `Cannot read property 'sections' of null uglify`
  devtool: 'hidden',

  entry: [
    './src/index.js',
  ],

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.UglifyJsPlugin(uglify),
  ],
})
