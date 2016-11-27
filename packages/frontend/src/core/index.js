import {ext} from 'xtpoints'
import plugins from '../plugins'
const di = {}

plugins(ext, di)

export default {
  ext: ext,
  di: di,
}

export {
  ext,
  di,
}
