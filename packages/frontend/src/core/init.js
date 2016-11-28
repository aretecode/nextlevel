import {ext, di} from './index'

// NOTE: async startup
export default async function(): void {
  // help all plugins to configure themselves
  await ext('core.bootstrap.exec', di)

  // actually execute the typical calls to attach the application to the dom (aka. initial render call)
  ext.point('core.attach.hot').invoke('exec')
}
