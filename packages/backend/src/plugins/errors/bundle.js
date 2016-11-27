// @NOTE: something like could be setup for express responses
export const bootstrap = function(ext) {
  ext.point('app.setup').extend({
    id: 'error-handling',
    index: -99,
    exec: function() {
      // http://stackoverflow.com/questions/37708790/can-i-override-es6s-promise-by-bluebirds-implementation-in-nodes-global-scope
      // https://github.com/petkaantonov/bluebird/issues/1026
      // http://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10801
      // https://github.com/babel/babel-loader/issues/143 ********
      // override promises with bluebird for extended functionality
      var promise = require('bluebird')
      require('babel-runtime/core-js/promise').default = promise

      // handle all uncaught exceptions
      // see - https://nodejs.org/api/process.html#process_event_uncaughtexception
      process.on('uncaughtException', err => {
        console.error('error point caught uncaught exception:', err)
      })
      
      // handle all unhandled promise rejections
      // see - http://bluebirdjs.com/docs/api/error-management-configuration.html#global-rejection-events
      // or for latest node - https://nodejs.org/api/process.html#process_event_unhandledrejection
      process.on('unhandledRejection', error => {
        console.error('error point caught unhandled rejection:', error)
      })
    },
  })
}
