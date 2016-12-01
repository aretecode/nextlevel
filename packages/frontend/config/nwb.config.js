var React = require('react')
var webpackConfig = require('./webpack.config.test')
var {exit} = require('nextlevel-helpers')
exit(40000)

console.log('args', process.argv)

// http://karma-runner.github.io/1.0/config/configuration-file.html
// https://github.com/insin/nwb/blob/master/docs/Configuration.md#browsers-string--arrayplugin
//
// https://github.com/kgoggin/react-es6-webpack-karma-boilerplate
// https://github.com/webpack/docs/issues/58
// http://stackoverflow.com/questions/36194996/reactdom-is-not-defined-with-react-and-webpack
// https://github.com/airbnb/enzyme/issues/302
// https://moduscreate.com/webpack-2-tree-shaking-configuration/
// https://webpack.github.io/docs/library-and-externals.html
//
// https://github.com/webpack/karma-webpack/issues/123
// https://github.com/airbnb/enzyme/blob/master/docs/guides/karma.md#enzyme--karma--webpack
// http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/
// http://stackoverflow.com/questions/38461421/karma-webpack-babel-loader-es6-unexpected-token-import
//
// http://stackoverflow.com/questions/31428916/karma-auto-watch-no-longer-works
// http://stackoverflow.com/questions/21248461/tests-with-karma-not-finishing
// https://github.com/karma-runner/karma/issues/824
// https://github.com/karma-runner/karma/issues/2348
//
// Karma configuration
var karmaConfig = {
  testFiles: [
    'test/*.spec.js',
  ],
  frameworks: ['mocha', 'sinon-chai'],
  plugins: [
    require('karma-sinon-chai'),
    require('karma-mocha-reporter'),
    require('karma-notify-reporter'),
    require('karma-jsdom-launcher'),
  ],
  reporters: ['mocha', 'notify'],
  browsers: [
    'jsdom',
  ],

  // logLevel: 'debug',
  nocache: true,
  singleRun: false,
  autoWatch: false,
  // noInfo: true,
  // usePolling: true,
}

const config = {
  type: 'react-app',
  karma: karmaConfig,

  // using webpack loader
  babel: {
    // stage: false,
  },
  webpack: {
    extra: webpackConfig,
  },
}

module.exports = config
