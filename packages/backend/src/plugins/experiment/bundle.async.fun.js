// https://blog.risingstack.com/async-await-node-js-7-nightly/
// http://stackabuse.com/node-js-async-await-in-es7/
// https://spion.github.io/posts/es7-async-await-step-in-the-wrong-direction.html
// http://rossboucher.com/await/#/
// https://codeplanet.io/the-only-bad-thing-about-es7-asyncawait/
// https://www.npmjs.com/package/babel-plugin-async-try-catch
// https://jakearchibald.com/2014/es7-async-functions/
// http://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html
// https://medium.com/@yamalight/danger-of-using-async-await-in-es7-8006e3eb7efb#.s1lh22wsp
// https://dimmeria.com/javascript-async-await-patterns
// https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html
// https://github.com/yortus/asyncawait
// https://www.danyow.net/es7-async-await-with-aurelia/

export const bootstrap = (ext) => {
  ext.point('app.setup').extend({
    id: 'async',
    disabled: true,
    exec: function() {
      // using `await Promise.delay(1000)`
      // ~ `sleep(1000)` in synchronous languages
      // or setTimeout =>{}, 1000
      function promised(err = false) {
        return new Promise(async (resolve, reject) => {
          if (err) {
            var start = Date.now()
            await Promise.delay(1000)
            console.log('waited...', (Date.now() - start))
            return reject('errored')
          }

          await Promise.delay(1000)
          resolve('resolved')
        })
      }

      // this is here because you cannot use a real error above
      // unless that is also inside of a catch
      // if we want to `await` a delay
      function promisedTimeout(err = false) {
        return new Promise((resolve, reject) => {
          if (err) {
            return setTimeout(() => {
              reject(new Error('reject'))
            }, 1000)
          }
          resolve('resolved')
        })
      }

      async function printFile() {
        // var asyncError = error => console.error(`error reading ${filename}:`, error.stack)
        try {
          const contents = await promised()
          console.log('always - awaited contents', contents)
        } catch (e) {
          throw new Error('never gets called')
        }
        try {
          const contents = await promised(true)
          console.error('never -  because no catch - async succeeded', contents)
        } catch (e) {
          console.log('always - caught', e)
        }
        try {
          const contents = await promisedTimeout(true)
          console.error('never - because no catch', contents)
        } catch (e) {
          console.log('always - caught real `Error`', e.message)
        }

        const contentsCatch = await promised(true).catch(e => console.log('caught the error - always', e))
        console.log('always - undefined - because error is caught', contentsCatch)

        const contentsNever = await promised(true)
        console.log('never - is caught by the errors bundle', contentsNever)
      }

      printFile()
      console.log('always - happens before awaiting')
    },
  })
}
