ext.point('app.setup').extend({
  id: 'using-globals',
  index: -5,
  exec: function() {
    console.log('using global... no need to export')
  }
})
