import {ext, di} from './index'

// @NOTE: async startup
export default async function(): void {
  // help all plugins to configure themselves
  await ext('core.bootstrap.exec', di)

  // execute the calls to attach the application to the dom (aka. initial render call)
  await ext('core.attach.hot.exec')
}
