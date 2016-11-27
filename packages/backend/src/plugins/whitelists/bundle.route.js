export const bootstrap = (ext) => {
  ext.point('app.routes').extend({
    id: 'whitelist',
    config: async function(app) {

      // app.get('/staff/tools/whitelists', async (req, res, next) => {
      //   await ext('app.whitelist.fetch', req, res, next)
      // })
      //
      // ~== to ^ commented out
      app.get('/staff/tools/whitelists', ext('route.wrap.async', 'app.whitelist.fetch')[0])

      app.post('/staff/tools/whitelists/:list', ext('route.wrap.async', 'app.whitelist.add')[0])
    }
  })
}
