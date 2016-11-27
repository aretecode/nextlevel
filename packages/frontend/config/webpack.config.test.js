var _ = require('lodash')
var path = require('path')
var dirMono = path.resolve(__dirname, "../../../")
var babel = require(dirMono + '/config/build/babel-loader.js')({hot: false, react: true})
var config = require('./webpack.config.base.js')

// https://github.com/airbnb/enzyme/issues/341
// https://github.com/rstacruz/jsdom-global#mocha
// https://github.com/ReactTraining/react-router/issues/4042
// https://github.com/zinserjan/mocha-webpack/tree/master/src
_.assign(config, {
  cache: false,
  watch: false,

  // output: {
  //   path: dir + '/build/test',
  //   filename: 'test.js',
  //   publicPath: '/',
  // },

  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },

  loaders: [
    {
      test: /\.jsx?$/,
      loaders: [babel],
    },
    {
      test: /\.json/, loader: 'json-loader',
    },
  ],
})

module.exports = config
