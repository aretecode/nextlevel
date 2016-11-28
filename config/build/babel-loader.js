module.exports = function(options = {hot: false, react: false}) {
  var presets = [
    'es2015-webpack2',
    'stage-0',
  ]
  var plugins = [
    'transform-runtime',
    'transform-flow-strip-types',
    'transform-regenerator',
    'transform-async-to-generator',
    'transform-class-properties',
    'transform-object-rest-spread',
  ]
  if (options.react) {
    presets.push('react')
  }

  if (options.hot) {
    plugins.push('react-hot-loader/babel')
    presets.push('react-hmre')
  }

  presets = 'presets[]=' + presets.join(',presets[]=')
  plugins = ',plugins[]=' + plugins.join(',plugins[]=')
  var babel = 'babel-loader?' + presets + plugins
  return babel
}
