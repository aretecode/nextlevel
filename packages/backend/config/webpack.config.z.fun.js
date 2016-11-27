var webpack = require('webpack')

// @TODO:
// use babel-plugin to make it a conditional
// defining global keyword
var unless = function(truth, cb) {
  // var truth = !!!argument
  if (truth) {
    return cb()
  }
}

module.exports = {
  plugins: [
    new webpack.DefinePlugin({'unless': unless}),
  ],
}
