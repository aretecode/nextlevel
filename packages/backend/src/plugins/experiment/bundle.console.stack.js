// @TODO:
// https://www.thecssninja.com/javascript/console
ext.point('app.setup').extend({
  id: 'console.stack',
  // use indexes to sort plugins
  index: -90,
  exec: function() {
    // store a reference to original console.console.log();
    const log = console.log

    // function to call when console.log is called
    const logger = function() {
      // loop through the arguments
      const argKeys = Object.keys(arguments)
      for (let i = 0, len = argKeys.length; i < len; i++) {
        const key = argKeys[i]
        var value = arguments[key]

        // split the string into a new line
        // add the indexes/error-position to the lines without node_modules
        // filter out `node_modules`
        if (typeof value === 'string' && value.includes('node_modules')) {
          var vals = value
          .split('\n')
          .map((line: string, i: number): string | boolean => {
            if (/node_modules/gmi.test(line))
              return false
            return '@' + i + ': ' + line
          })
          .filter((line: string): string => {
            if (/node_modules/gmi.test(line))
              return false
            return line
          })
          .join('\n')

          arguments[key] = vals
        }
      }

      // apply arguments with console ref
      log.apply(console, arguments)
    }

    // reassign global ref
    console.log = logger
  },
})

ext.point('app.setup').extend({
  id: 'console.test.stack',
  index: -80, // so it runs after hacking the stack
  exec: function() {
    try {
      throw new Error('canada ehrror!')
    } catch (e) {
      console.log(e.stack)
    }
  },
})
