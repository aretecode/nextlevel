// @flow
ext.point('app.routes').extend({
  id: 'kill',
  config: function(app: Express) {
    app.get('/kill', () => {
      console.log('killing!')
      process.exit(0)
    })
  },
})

ext.point('app.routes').extend({
  id: 'helpscout',
  config: function(app: Express) {
    // ensure it has email
    // use the email to respond with a link to that email
    const helpscout: ResponseHandler = function(req, res): Response {
      // express always has query object, default empty
      const email = req.query.email

      if (!email)
        return res.status(422).json({error: 'had no customer email'})

      res.status(200).json({
        html: `<a href="http://helpscout.io?query=email:${email}">${email}</a>`,
      })

      return res
    }

    app.get('/helpscout', helpscout)
  },
})
