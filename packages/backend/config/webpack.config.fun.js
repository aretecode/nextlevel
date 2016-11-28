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

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('fun')}),
  ],
})

// https://www.reddit.com/r/sweetjs/
// http://sweetjs.org/doc/main/sweet.html#compiler-api
// https://github.com/bopjesvla/sweet-loader -- doesnt work at all
// https://github.com/sweet-js/sweet.js/blob/master/dist/sweet-loader.js
// https://github.com/sweet-js/sweet.js/blob/master/src/sweet.js
// https://github.com/sweet-js/sweet.js/issues/425
// http://stackoverflow.com/questions/35678530/using-sweet-js-and-babel
// Module build failed: TypeError: sweet.loadNodeModule is not a function
// had to upgrade another loader https://github.com/aretecode/sweet-js-webpack-loader

config.module.loaders.push({
  test: /\.sjs$/,
  loader: 'sweet-js-webpack-loader' + '?modules[]=' + macro + ',sourceMaps=false',
})

module.exports = config
