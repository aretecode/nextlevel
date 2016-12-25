// above is packages, then the main
// set these up for usage in all of the webpack configs
var path = require('path')
var dirMono = path.resolve(__dirname, "../../../")
var dir = path.resolve(__dirname, "../")
global.dirMono = dirMono
global.dir = dir

var babel = require('babel-loader-builder')({hot: false, react: false})

console.log('args', process.argv)

module.exports = {
  cache: false,
  watch: false,
  devtool: "#source-map",

  // https://github.com/webpack/docs/wiki/configuration#context
  context: dir,

  entry: './src',

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    publicPath: './public/',
  },

  resolve: {
    modules: [
      "node_modules",
      dir,
      dirMono + '/flow',
    ],
    alias: {
      monorepo: dirMono,
      config: dirMono + '/config/backend',
      plugins: dir + '/src/plugins/',
      bootstrap: dir + '/src/core/init.js',
      helpers: 'nextlevel-helpers',
    },
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: [babel],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
}
