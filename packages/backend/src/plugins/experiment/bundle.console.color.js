export const bootstrap = (ext) => {
  ext.point('app.setup').extend({
    id: 'console.color',
    // use indexes to sort plugins
    index: -100,
    exec: function() {
      // store a reference to original console.log
      const log = console.log
      const chalk = require('chalk')

      // returns string modified with the colors
      function appplyRandomConsoleColor(args) {
        // list of colors in https://github.com/chalk/ansi-styles#colors
        const colors = [
          'red',
          'green',
          'yellow',
          'blue',
          'magenta',
          'cyan',
          'white',
          // 'grey', 'gray'
        ]

        // copy colors
        // prefix with 'bg'
        // uppercase the color name
        const bgColor = colors.slice(0).map(color => 'bg' + color.charAt(0).toUpperCase() + color.slice(1))

        // @NOTE: disabled bg colors for now, kinda ugly
        // -> could be individual plugins for fun disabling
        //
        // have a list of text colors + bg colors
        // const allColors = colors.concat(bgColor)
        const allColors = colors

        // get a random color from the list
        const color = allColors[Math.floor(Math.random() * allColors.length)]

        // if it is a bg color, use grey text & add padding
        // if (color.includes('bg')) {
        //   if (chalk[color] && typeof chalk[color].gray === 'function') {
        //     return chalk[color].gray(' ' + args + ' ')
        //   }
        // }

        // otherwise use normal color
        return chalk[color](args)
      }

      // function to call when console.log is called
      const logger = function() {
        // loop through the colors
        const argKeys = Object.keys(arguments)
        for (let i = 0, len = argKeys.length; i < len; i++) {
          const key = argKeys[i]
          const value = arguments[key]

          // only add colors to strings
          if (typeof value === 'string') {
            // reassign the value in arguments to the value wrapped in the chalk
            arguments[key] = appplyRandomConsoleColor(value)

            // @NOTE: disabled for now, not needed
            // const nextIsString = typeof arguments[argKeys[(i + 1)]] === 'string'
            // if there is more than 1 argument
            // and it doesn't already have a new line
            // and the next one isn't a string
            // if (len > 1 && !value.includes('\n') && !nextIsString) {
            //   arguments[key] = arguments[key] + '\n'
            // }
          }
        }

        // apply arguments with console ref
        log.apply(console, arguments)
      }

      // reassign global ref
      console.log = logger

      // @TODO: not sure how to take over the other node console methods
      // http://davidherron.com/blog/2014-04-26/overriding-consolelog-nodejs-and-other-thoughts-about-logging-node-apps
      //
      // // append type before it
      // // could do with colors too
      // const nameWrapper = function(name) {
      //   return function() {
      //     arguments['0'] = 'BAH'
      //     arguments['999'] = name
      //       // return logger(arguments)
      //   }
      // }
      //
      // console.errror = nameWrapper('error')
      // console.errror = 'nope'
      // console.debug = nameWrapper('debug')
      // console.info = logger
      //
      // const cons = {
      //   log: logger,
      // }
      // global.console = cons
      // console = cons
      // global.console = console
      //
      // global.console.log = console.log
      // global.console.errror = 'nope'
      // global.console.debug = console.debug
      // global.console.info = console.info
    }
  })
}
