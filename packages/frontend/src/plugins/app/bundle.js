import {render} from 'react-dom'
import AppRoot from './AppRoot'

export const bootstrap = (ext) => {
  ext.point('core.production.attach').extend({
    id: 'main',
    exec: () => {
      return render(<AppRoot/>, document.querySelector('#app'))
    }
  })
}
