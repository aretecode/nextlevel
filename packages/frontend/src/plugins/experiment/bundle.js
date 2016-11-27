export const bootstrap = (ext) => {
  ext.point('app.routes').extend({
    id: 'experiment',
    config: function(routes = []) {
      routes.push({
        path: '/experiment',
        // onEnter: function() {},
        getComponents: function() {
          return require('./component.js')
        },
      })
      return routes
    }
  })
}
