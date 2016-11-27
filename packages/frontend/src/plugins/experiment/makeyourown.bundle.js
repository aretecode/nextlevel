export const bootstrap = (ext) => {
  ext.point('core.bootstrap').extend({
    id: 'core-fun',
    config: function() {
      console.log('just for fun eh :-) this runs before the hot reloading starts')
    }
  }),

  ext.point('app.routes').extend({
    id: 'route-fun',
    config: function() {
      console.log('this is invoked from plugins/app/AppRoot')
    }
  })
}
