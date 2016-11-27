export const bootstrap = (ext) => {
  ext.point('app.setup').extend({
    id: 'unless',
    exec: function() {
      // var exists = ext.something.not.real.ex
      // unless(true, noop => console.log('if only'))
    },
  })
}
