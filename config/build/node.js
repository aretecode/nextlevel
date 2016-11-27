var nodeExternals = require('webpack-node-externals')

module.exports = {
  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',

  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
}
