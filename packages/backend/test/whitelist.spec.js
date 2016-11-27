import {expect} from 'chai'
import http from 'http'
import {di, ext, db, config} from '../src/core/index'
import {getDefaultOptions} from './lib/helpers'
import {getResultJSON} from 'helpers'
import driver from 'bootstrap'

// @NOTE:
// `var` is used here since it is the least specific
// and thus easiest to change
describe('Whitelist', () => {
  var headers, req
  var id = '1'
  var list = 'item1,item2,item3'
  var data = JSON.stringify({
    body: {id: id},
    params: {list: list,},
    id: id,
    user: {
      role: 'admin',
    },
    customer: {
      email: 'biggie@smalls.com',
    }
  })

  before(done => {
    driver(config.microservice1.port)
    done()
  })
  after(done => {
    driver.close()
    done()
  })

  it('should add a whitelist list', (done) => {
    headers = getDefaultOptions('/staff/tools/whitelists/' + list)
    headers.method = 'POST'
    headers.headers['Content-Type'] = 'application/json'
    headers.headers['Content-Length'] = Buffer.byteLength(data)
    req = http.request(headers, function(res) {
      expect(res.statusCode).to.equal(201)
      return getResultJSON(res, function(json) {
        expect(json.message).to.equal('added ' + id + ' to whitelist')
        return done()
      })
    })
    req.write(data)
    return req.end()
  })

  it('cannot add again', (done) => {
    headers = getDefaultOptions('/staff/tools/whitelists/' + list)
    headers.method = 'POST'
    headers.headers['Content-Type'] = 'application/json'
    headers.headers['Content-Length'] = Buffer.byteLength(data)
    req = http.request(headers, function(res) {
      expect(res.statusCode).to.equal(422)
      return getResultJSON(res, function(json) {
        // @NOTE: this is because we don't clear it first and other test already added data
        expect(json.message).to.equal('list: item1,item2,item3 with value/id: 1 was already in the db')
        return done()
      })
    })
    req.write(data)
    return req.end()
  })

  it('should get a whitelist list', (done) => {
    headers = getDefaultOptions('/staff/tools/whitelists/')
    req = http.request(headers, function(res) {
      expect(res.statusCode).to.equal(200)
      return getResultJSON(res, function(json) {
        const list = json.list
        console.log(list)
        expect(list).to.eql('item1,item2,item3')
        return done()
      })
    })
    return req.end()
  })

})
