import features from 'feature.js'

export const bootstrap = (ext) => {
  ext.point('core.bootstrap').extend({
    id: 'feature.js',
    exec: function(di) {
      di.service('feature', () => feature)
    }
  })
}
