// load the right config for the env
// merge with default
// add to di (actually export default so we include it on aliased core)

const config = require("./default")

// default is empty object, aka do nothing use default
let chosenConfig = {}

// check our env vars to load the config based on that
// load the file
if (process.env.NODE_ENV) {
  switch (process.env.NODE_ENV) {
  case 'testing':
    chosenConfig = require("./testing")
    break
  case 'development':
    chosenConfig = {} // require("./development")
    break
  case 'production':
    chosenConfig = {}
    break
  default:
    chosenConfig = require("./default")
    break
  }
}

// check if the file was loaded and exists
if (chosenConfig && Object.keys(chosenConfig).length > 0) {
  // loop over the keys in the config, merge with default: deep obj.assign
  const keyKeys = Object.keys(chosenConfig)
  for (let i = 0, len = keyKeys.length; i < len; i++) {
    const key = keyKeys[i]
    const val = chosenConfig[key]
    config[key] = val
  }
}

export default config
