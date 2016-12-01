import React from 'react'

ext.point('app.routes').extend({
  id: 'experiment',
  config: function(routes = []) {
    routes.push({
      path: 'experiment',
      getComponents: function() {
        return require('./component.js')
      },
    })
    return routes
  },
})

ext.point('app.routes').extend({
  id: 'examples',
  config: function(routes) {
    routes.push({
      Component: () => <div>Main</div>,
    })
    routes.push({
      path: 'foo',
      Component: () => <div>Foo</div>,
    })
    routes.push({
      path: 'bar',
      getComponent: () => new Promise(resolve => {
        setTimeout(resolve, 1000, ({data}) => <div>{data}</div>)
      }),
      getData: () => new Promise(resolve => {
        setTimeout(resolve, 1000, 'Bar')
      }),
      render: ({Component, props}) => (
        Component && props ? (
          <Component {...props} />
        ) : (
          <div><small>Loading&hellip;</small></div>
        )
      ),
    })
    return routes
  },
})

// could also add props to routes
// could add depth properties here
// could swap out these app links for different navs with diff plugins
ext.point('app.links').extend({
  id: 'examples',
  config: function(links = []) {
    links = links.concat([
      {
        to: '/foo',
        children: 'Foo',
      },
      {
        to: '/bar',
        children: 'Bar (async)',
      },
      {
        to: '/baz',
        children: 'Baz (redirects to Foo)',
      },
      {
        to: '/qux',
        children: 'Qux (missing)',
      },
      {
        to: '/qux',
        children: 'Qux (missing)',
      },
      {
        to: '/experiment',
        children: 'Experiment',
      },
    ])

    return links
  },
})
