var {exit} = require('nextlevel-helpers')
var config = require('./webpack.config.base.node')

// node
// https://github.com/request/request/issues/1529
// http://webpack.github.io/docs/configuration.html#node
// http://webpack.github.io/docs/configuration.html#target
// https://github.com/babel/karma-babel-preprocessor
// https://github.com/webpack/karma-webpack
// https://www.npmjs.com/package/webpack-node-externals
//
// config
// https://github.com/insin/nwb/blob/master/docs/Configuration.md#webpack-configuration
// http://stackoverflow.com/questions/32296967/webpack-dev-server-doesnt-generate-source-maps
// https://webpack.github.io/docs/configuration.html#devtool
// https://github.com/insin/nwb/blob/master/docs/Configuration.md#webpack-configuration
// https://webpack.github.io/docs/configuration.html#output-devtoollinetoline
// https://github.com/webpack/webpack/issues/603
//
// https://webpack.github.io/docs/usage-with-karma.html
// http://www.ifwe.co/code/posts/easing-the-transition-to-es6/
// http://jsrocks.org/2016/01/configuring-babel-6-for-node-js/
// https://github.com/babel/example-node-server
// https://github.com/JaxCavalera/Tagged_Isomorphic/blob/master/webpack-server-config.js
// http://stackoverflow.com/questions/32385219/mocha-tests-dont-run-with-webpack-and-mocha-loader
// http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
// http://randycoulman.com/blog/2016/03/22/testing-with-mocha-and-webpack/
// https://github.com/gor181/webpack-react-babel-mocha-boilerplate
// https://www.npmjs.com/package/webpack-for-babel-plugin
// http://stackoverflow.com/questions/34683682/webpack-aliases-in-node-js-server-code
// https://github.com/jagrem/babel-resolve-relative-module
// https://github.com/halt-hammerzeit/universal-webpack
// https://www.google.ca/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=nodejs%20webpack%20example%20mocha
// https://github.com/babel/babel-loader/issues/162
// https://github.com/webpack/webpack/issues/135
// https://github.com/jlongster/backend-with-webpack/tree/part1
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.t2dca3iyr
// https://github.com/zinserjan/mocha-webpack/blob/master/src/webpack/InjectChangedFilesPlugin.js
//
// http://stackoverflow.com/questions/35156193/webpack-does-not-generate-bundle-file-on-npm-run
// http://stackoverflow.com/questions/29537325/webpack-is-not-compiling-new-files-into-bundle
// http://stackoverflow.com/questions/37353752/webpack-output-files-are-not-generating
// https://webpack.github.io/docs/webpack-dev-server.html
//
// webpack2
// https://webpack.js.org/configuration/
// https://github.com/webpack/webpack/issues/2782
// http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/
// http://stackoverflow.com/questions/34570245/webpack-entry-module-not-found
//
// require
// https://github.com/webpack/webpack/issues/2675
// https://www.bountysource.com/issues/28860236-webpack-build-issues
// https://github.com/ocombe/ng2-translate/issues/273
// http://stackoverflow.com/questions/37476827/why-is-dynamic-requireexpression-with-webpack-not-working
// http://grokbase.com/t/gg/paperjs/1561kvdsd1/react-webpack-paperjs-nodejs
// https://github.com/webpack/node-loader
// https://github.com/samcrosoft/webpack-node-loader
// http://stackoverflow.com/questions/29421409/how-to-load-all-files-in-a-subdirectories-using-webpack-without-require-statemen
// http://stackoverflow.com/questions/38392697/webpack-umd-critical-dependency-cannot-be-statically-extracted
// https://github.com/webpack/webpack/issues/118
// https://github.com/babel/babel-loader/issues/173
// https://github.com/webpack/webpack/issues/1968
// http://stackoverflow.com/questions/37628720/webpack-require-array-of-requirements-require-dynamic-string
//
// babel
// http://stackoverflow.com/questions/33830769/syntaxerror-unexpected-token-using-async-and-babel-in-koa
// http://jonathancreamer.com/webpack-code-splitting-with-es6-and-babel-6/
// https://www.npmjs.com/package/babel-loader
// http://stackoverflow.com/questions/33641593/babel-6-async-await-unexpected-token
// http://stackoverflow.com/questions/33830769/syntaxerror-unexpected-token-using-async-and-babel-in-koa
// https://www.reddit.com/r/typescript/comments/4q09uv/help_webpack_weirdness_require_function_is_used/
// https://github.com/babel/gulp-babel/issues/50
// https://github.com/gilbarbara/react-joyride/issues/107
//
// mocha
// https://github.com/zinserjan/mocha-webpack/tree/master/src
//
// entry: {
//   src: path.resolve(dir + '/src'),
//   test: path.resolve(dir + '/test'),
// },

module.exports = config
exit(30000)
