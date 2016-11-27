export const bootstrap = (ext, di) => {
  ext.point('app.setup').extend({
    id: 'socket-setup',
    index: -98,
    exec: () => {
      const http = require('http')
      const https = require('http')
      http.globalAgent.maxSockets = 20
      https.globalAgent.maxSockets = 20
    },
  })
  ext.point('app.setup').extend({
    id: 'init',
    index: -97,
    exec: () => {
      if (di.container.app) return

      const express = require('express')
      const app = express()
      di.service('app', () => app)
    },
  })
}
