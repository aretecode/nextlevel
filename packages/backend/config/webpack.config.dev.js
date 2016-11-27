var _ = require('lodash')
var webpack = require('webpack')
var config = require('./webpack.config.base.node')

// # hot
// https://github.com/jiyinyiyong/webpack-backend-HMR-demo
// http://stackoverflow.com/questions/36073661/webpack-hot-module-reload-on-the-server
// https://github.com/aunz/mwb
// https://github.com/60frames/webpack-hot-server-middleware
// https://github.com/christianalfoni/webpack-express-boilerplate
// http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
// http://madole.github.io/blog/2015/08/26/setting-up-webpack-dev-middleware-in-your-express-application/
// https://github.com/shama/webpack-stream
// https://github.com/shama/webpack-stream/issues/18
//
// https://gaearon.github.io/react-hot-loader/getstarted/
// http://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
// https://github.com/webpack/docs/wiki/webpack-dev-server
// > You may want to run a backend server or a mock of it in development.
// > You should not use the webpack-dev-server as a backend.
// > Its only purpose is to serve static (webpacked) assets.å
var newConfig = _.defaultsDeep(config, {
  cache: false,
  entry: [
    './src/index.js',
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
})

module.exports = newConfig
