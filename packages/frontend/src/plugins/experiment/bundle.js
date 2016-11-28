ext.point('app.routes').extend({
  id: 'experiment',
  config: function(routes = []) {
    routes.push({
      path: '/experiment',
      getComponents: function() {
        return require('./component.js')
      },
    })
    return routes
  }
})
