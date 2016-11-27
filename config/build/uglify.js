var uglify = {
  report: 'gzip',
  sourceMap: true,
  minimize: true,
  compress: {
    screw_ie8: true,
    warnings: false,
  },
  output: {
    comments: false,
    screw_ie8: true,
  },
  sourceMaps: false,
  mangle: false,
}

if (process.env.NODE_ENV === 'production') {
  uglify = {
    mangle: false,
    compress: {
      screw_ie8: true,
      warnings: false,
    },
    minimize: true,
    sourceMaps: true,
    output: {
      comments: false,
      screw_ie8: true,
    },
  }
}

module.exports = uglify
