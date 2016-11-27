var path = require('path')
var nodeExternals = require('webpack-node-externals')

console.log('args', process.argv)

module.exports = {
  type: 'web-module',
  babel: {
    plugins: ['transform-async-to-generator', 'transform-flow-strip-types']
  },
  webpack: {
    extra: {
      // in order to ignore built-in modules like path, fs, etc.
      target: 'node',
      // in order to ignore all modules in node_modules folder
      externals: [nodeExternals()],

      context: './src',
      devtool: '#source-map',
      loaders: [
        {
          test: /\.js?$/,
          loaders: ['babel-loader'],
          include: './src',
        },
        {
          test: /\.json/, loader: 'json',
        },
      ],
      output: {
        filename: 'index.js',
        sourceMapFilename: '[file].map',
      },
      resolve: {
        resolve: {
          modules: [
            './src',
            './node_modules',
          ],
        },
      },
    },
  },
}
