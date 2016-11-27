var path = require('path')
var webpack = require('webpack')
var dirMono = path.resolve(__dirname, "../../")
var dir = path.resolve(__dirname, "./")
var babel = require(dirMono + '/config/build/babel-loader.js')({hot: true, react: true})
var CleanWebpackPlugin = require('clean-webpack-plugin')

// http://stackoverflow.com/questions/37620861/the-following-modules-couldnt-be-hot-updated-full-reload-needed
// http://stackoverflow.com/questions/35301836/getting-webpack-hot-updating-to-work-correctly-in-my-isomorphic-web-app
// https://www.garysieling.com/blog/3183-2
// https://github.com/glenjamin/webpack-hot-middleware/issues/105
// https://github.com/glenjamin/webpack-hot-middleware/issues/78
// https://github.com/glenjamin/webpack-hot-middleware#config
// https://www.npmjs.com/package/koa-webpack-middleware
var config = {
  context: dir,
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['dist', 'static']),
  ],

  output: {
    path: path.join(dir, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: '/static/',
  },
  resolve: {
    alias: {
      'xt': path.resolve('./src/core/index.js'),
      'plugins': path.resolve('./src/plugins'),
    },
  },

  module: {
    // https://github.com/insin/nwb/blob/master/docs/Configuration.md#webpack-configuration
    // http://stackoverflow.com/questions/32296967/webpack-dev-server-doesnt-generate-source-maps
    // https://webpack.github.io/docs/configuration.html#devtool
    // https://github.com/insin/nwb/blob/master/docs/Configuration.md#webpack-configuration
    // https://webpack.github.io/docs/configuration.html#output-devtoollinetoline
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
    // https://github.com/glenjamin/ultimate-hot-reloading-example
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [babel],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.json/, loader: 'json-loader',
      },
    ],
  },

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&overlay=true&reload=true',
    './src/index.js',
  ],
}

module.exports = config
