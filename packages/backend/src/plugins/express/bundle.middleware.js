ext.point('app.middleware').extend({
  id: 'redis',
  setup: (app, config) => {
    let redis
    const url = require('url')
    const Redis = require('redis')
    const session = require('express-session')
    const RedisStore = require('connect-redis')(session)

    if (config.microservice1.database.redis) {
      const redisUrl = url.parse(config.microservice1.database.redis)
      redis = Redis.createClient(redisUrl.port, redisUrl.hostname)
      redis.auth(redisUrl.auth.split(':')[1])
    } else {
      redis = Redis.createClient(6379, '127.0.0.1')
    }

    redis.on('error', err => {
      return console.error(err)
    })

    app.use(session({
      store: new RedisStore({
        client: redis,
        secret: config.microservice1.database.secret,
      }),
      resave: false,
      saveUninitialized: true,
    }))
  },
})

ext.point('app.middleware').extend({
  id: 'body-parser',
  index: -5,
  setup: app => {
    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({
      extended: true,
    }))
    app.use(bodyParser.json({
      type: 'application/json',
    }))
  },
})

ext.point('app.middleware').extend({
  id: 'cors',
  setup: app => {
    app.all('/*', function(req, res, next): ResponseMiddleware {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      return next()
    })
  },
})

// use this to determine your hottest routes
// and then create chunks using webpack
// for routes that are used the most
ext.point('app.middleware').extend({
  id: 'log-hot-route-log',
  setup: app => {
    const fs = require('fs')
    app.use(function(req, res, next): ResponseMiddleware {
      const filename = './logfile.log'
      const data = JSON.stringify({
        path: req.path,
        query: req.query,
        body: req.body,
        params: req.params,
        date: Date.now(),
      }) + '\n'

      fs.appendFile(filename, data)
      console.log('called', req.path)
      next()
    })
  },
})
