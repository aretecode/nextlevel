require("react-hot-loader/patch")
import driver from './core/init.js'
driver()

if (module.hot) {
  driver()
}
