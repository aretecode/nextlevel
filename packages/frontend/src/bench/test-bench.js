import benchmark from 'benchmark'
import benchmarks from 'beautify-benchmark'

const suite = new benchmark.Suite

suite.add('RegExp#test', function() {
  /o/.test('Hello World!')
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1
})
.on('cycle', function(event) {
  benchmarks.add(event.target)
})
.on('complete', function() {
  benchmarks.log()
})
.run()
