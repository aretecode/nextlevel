import React from 'react'
import createBrowserRouter from 'found/lib/createBrowserRouter'
import makeRouteConfig from 'found/lib/jsx/makeRouteConfig'
import Redirect from 'found/lib/jsx/Redirect'
import Route from 'found/lib/jsx/Route'
import {di} from '../../core/index'

// ## routing farce + found
// https://github.com/4Catalyzer/found/blob/master/examples/basic-jsx/src/index.js
// https://medium.com/@taion/react-routing-and-data-fetching-ec519428135c#.5bz15uj6z
// https://github.com/4Catalyzer/farce

function App({children}) {
  const links = ext.point('app.links').exec('config')
  const LinkItem = ext.point('app.jsx').exec('linkItem')
  const LinkItems = ext.point('app.jsx').invoke('linkItems', links)

  return (
    <div>
      <ul>
        <LinkItem to="/">
          Main
        </LinkItem>
        <ul>
          {links}
        </ul>
      </ul>
      {children}
    </div>
  )
}

const routesToRender = []
function getRoutesToRender(): Array<Route> {
  const componentRoutes = di.container.routes

  // if already rendered
  if (routesToRender.length > 1) return routesToRender

  for (let i = 0, len = componentRoutes.length; i < len; i++) {
    const component = componentRoutes[i]
    const props = {
      path: component.path,
    }

    // take properties from the route component
    // add them to props
    // then turn into a Route component
    if (component.Component)
      props.Component = component.Component
    if (component.getComponent)
      props.getComponent = component.getComponent
    if (component.getComponents)
      props.Component = component.getComponents().default
    if (component.getData)
      props.getData = component.getData
    if (component.render)
      props.render = component.render

    routesToRender.push(
      <Route
        key={i}
        {...props}
      />)
  }
  return routesToRender
}

class AppRoot extends React.Component {
  render() {
    const BrowserRouter = createBrowserRouter({
      routeConfig: makeRouteConfig(
        <Route
          path="/"
          Component={App}
        >
          {getRoutesToRender()}
          <Redirect
            from="baz"
            to="/foo"
          />
        </Route>
      ),

      renderError: ({error}) => (
        <div>
          {error.status === 404 ? 'Not found' : 'Error'}
        </div>
      ),
    })

    return <BrowserRouter />
  }
}

module.exports = AppRoot
