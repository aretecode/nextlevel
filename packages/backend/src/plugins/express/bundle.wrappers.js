ext.point('route.wrap').extend({
  id: 'wrappers',
  async: nsfn => {
    return async function(req, res, next): ResponseMiddleware {
      await ext(nsfn, req, res, next)
    }
  },
})
