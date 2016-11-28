import React from 'react'
import {BrowserRouter, Match, matchPattern, Redirect} from 'react-router'
import App from './App'
import {ext} from 'xt'

// # React Hot Reloading 3
// https://github.com/gaearon/react-hot-boilerplate/commit/b52c727937a499f3efdc5dceb74ae952aa318c3a
// https://webpack.github.io/docs/hot-module-replacement.html
// http://stackoverflow.com/questions/35477828/using-react-hot-loader-with-babel-6
//
// ## Routing
// https://github.com/gaearon/react-hot-loader/issues/281
// https://github.com/ReactTraining/react-router/tree/master/examples
// http://stackoverflow.com/questions/35835670/react-router-and-this-props-children-how-to-pass-state-to-this-props-children
// https://github.com/ReactTraining/react-router/issues/3664
// https://css-tricks.com/learning-react-router/
// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/02-rendering-a-route
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/RouteConfiguration.md
// https://github.com/ReactTraining/react-router/issues/2306
// http://stackoverflow.com/questions/33685208/react-router-how-to-configure-the-index-route-using-javascript-object **
// https://github.com/ReactTraining/react-router/pull/3603/files
// https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.2.0.md
// https://github.com/ReactTraining/react-router/commit/3076dca3c4335cf8a18d09cd28bc2c651ca946de
// http://adambac.com/what-practical-programmer-should-know-about-react-router/
//
// ## routing v4
// https://github.com/ReactTraining/react-router/tree/v4#why-the-huge-change
// http://broonix-rants.ghost.io/upgrading-to-react-router-v4/
// https://news.ycombinator.com/item?id=12511419
// https://github.com/ReactTraining/react-router/tree/v4/website/examples
//
// ## routing farce + found
// https://github.com/4Catalyzer/found/blob/master/examples/basic-jsx/src/index.js
// https://medium.com/@taion/react-routing-and-data-fetching-ec519428135c#.5bz15uj6z
// https://github.com/4Catalyzer/farce

class AppRoot extends React.Component {
  render() {
    // this is passed in as a param for each function executed with routes.config
    const routes = []
    ext.point('app.routes').exec('config', routes)

    const componentroutes = []
    for (let i = 0, len = routes.length; i < len; i++) {
      const r = routes[i]
      componentroutes.push({
        path: r.path,
        component: r.getComponents(),
      })
    }

    const renderMatch = ({pathname}) => {
      let C
      // go through our routes
      for (let i = 0, len = componentroutes.length; i < len; i++) {
        // see if it matches
        const route = componentroutes[i]
        const matches = matchPattern(pathname, {pathname: route.path}, false)
        if (matches) {
          // if it does, use auth if it has one
          // could let the onEnter do its own redirect thoigh
          if (route.onEnter && route.onEnter()) {
            return (<Redirect to={{pathname: route.onEnter(), state: {from: pathname}}}/>)
          }

          // otherwise, use the component
          C = route.component.default
          return (<div><C /></div>)
        }
      }

      // if no route is matched
      return (<div>no route matched - default eh <App /></div>)
    }
    return (
      <BrowserRouter>
        <Match pattern={'*'} component={renderMatch} />
      </BrowserRouter>)
  }
}

module.exports = AppRoot
