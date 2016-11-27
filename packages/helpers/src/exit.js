export default function(timeout = 20000) {
  console.log('going to exit in... ' + timeout)
  setTimeout(function() {
    console.log('had to exit with timeout')
    process.exit(0)
  }, timeout)
}
