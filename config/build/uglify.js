var uglify = {
  report: 'gzip',
  minimize: false,
  compress: {
    screw_ie8: true,
    warnings: true,
  },
  output: {
    comments: true,
    screw_ie8: true,
  },
  sourceMaps: false,
  mangle: false,
  beautify: true,
}

if (process.env.NODE_ENV === 'production') {
  uglify = {
    mangle: true,
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
