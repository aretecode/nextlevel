import {expect} from 'chai'
import {
  getResultJSON,
  getResultText,
  firstOpenPort,
} from '../src'

describe('export functions should exist', () => {

  it('should be all functions for now', (done) => {
    expect(typeof getResultJSON).to.eql('function')
    expect(typeof getResultText).to.eql('function')
    expect(typeof firstOpenPort).to.eql('function')
    done()
  })

})
