var _ = require('lodash')
var webpack = require('webpack')
var config = require('./webpack.config.base.js')

var path = require('path')
var dir = path.resolve(__dirname, "../")
var dirMono = path.resolve(__dirname, "../../../")
var uglify = require(dirMono + '/config/build/uglify')
var babel = require(dirMono + '/config/build/babel-loader.js')({hot: false, react: true})

_.assign(config, {
  entry: './src',
  devtool: 'hidden',

  output: {
    path: dir + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: '/static/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [babel],
        include: [
          dir + '/src',

          // https://github.com/developit/preact-compat/issues/192
          dir + '/node_modules/preact-compat',
        ],
      },
      {
        test: /\.json/, loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.UglifyJsPlugin(uglify),
  ],

})

config.resolve.alias['react'] = 'preact-compat'
config.resolve.alias['react-dom'] = 'preact-compat'

module.exports = config
