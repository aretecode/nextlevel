import {di} from './index'

// @NOTE: async startup
export default async function(): void {
  // help all plugins to configure themselves
  await ext('core.bootstrap.exec', di)

  // chain the route array along each of the routes
  di.container.routes = []
  await ext.execAsync('app.routes.config', di.container.routes)

  // execute the calls to attach the application to the dom (aka. initial render call)
  if (window.DEVELOPMENT)
    await ext('core.attach.hot.exec')
  else
    await ext('core.attach.production.exec')
}
