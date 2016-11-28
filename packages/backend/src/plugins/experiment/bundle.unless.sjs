export const bootstrap = function(ext) {
  console.log('bootstrapped unless')
  ext.point('app.setup').extend({
    id: 'unless',
    index: -999,
    exec: function() {
      console.log('loaded unless...')

      // var exists = ext.something.not.real.ex
      // unless(true, noop => console.log('if only'))

      let eh = false

      unless (eh) {
        console.log('unless is a yes!')
      }

    },
  })
}
// console.log('dew it');
// unless (eh)
