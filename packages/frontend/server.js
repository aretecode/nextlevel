var path = require('path')
var webpack = require('webpack')
var express = require('express')
var devMiddleware = require('webpack-dev-middleware')
var hotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}))

app.use(hotMiddleware(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'))
})

var port = 3001
app.listen(port, function(err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:' + port + '/')
})
