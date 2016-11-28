import {ext, di} from './index'
import {firstOpenPort} from 'helpers'

// @NOTE: async startup
async function init(port: number | null): mixed {

  // invoke all app setups
  //
  // const setupBundles = ext.point('app.setup').invoke('exec', di)
  // await Promise.all(setupBundles.value())
  //
  // same as ^
  await ext.invokeAsync('app.setup.exec', di)

  // disable one piece of middleware
  ext.point('app.middleware').disable('redis')

  // setup all middleware
  ext.point('app.middleware').invoke('setup', di.container.app, di.container.config)

  // help all routes to configure themselves
  await ext('app.routes.config', di.container.app, di)

  if (!port) return null

  // if we want to use a random open port, find one
  if (port === 'open')
    port = await firstOpenPort(3000)

  const server = await di.container.app.listen(port, (err: Error) => {
    if (err) console.error(err.stack)
    console.log('listening on port ' + port)
  })
  if (!di.container.server)
    di.service('server', (): Express => server)

  return port
}

init.close = function(cb: ?Function) {
  di.container.server.close(cb)
}

export default init
