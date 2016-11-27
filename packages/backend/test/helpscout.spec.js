import {expect} from 'chai'
import http from 'http'
import {ext, config} from '../src/core/index'
import {getDefaultOptions} from './lib/helpers'
import {getResultJSON} from 'helpers'
import driver from 'bootstrap'

describe('HelpScout Link', () => {
  // can be called with async/await here, or normally as seen in whitelist
  before(async () => {
    ext.point('app.setup')
      .disable('console.color')
      .disable('console.test.stack')
      .disable('async')
      .disable('unless')

    await driver(config.microservice1.port)
  })
  after(done => {
    driver.close()
    done()
  })

  it('should respond with a html link with correct body', (done) => {
    const headers = getDefaultOptions('/helpscout?email=biggie@smalls.com')
    const req = http.request(headers, (res) => {
      expect(res.statusCode).to.equal(200)
      return getResultJSON(res, function(json) {
        expect(json.html).to.equal('<a href="http://helpscout.io?query=email:biggie@smalls.com">biggie@smalls.com</a>')
        return done()
      })
    })
    return req.end()
  })
})
