// https://github.com/codekirei/first-open-port
var net = require('net');
export default function firstOpenPort(port, max) {
  max = max || 65535;
  var err = 'no ports open from ' + port + ' to ' + max;

  return new Promise(function (res, rej) {
    return function test() {
      var server = net.createServer();
      server.on('error', function () {
        if ((port += 1) <= max) test();else rej(new Error(err));
      });
      server.on('listening', server.close);
      server.on('close', function () {
        return res(port);
      });
      server.listen(port);
    }();
  });
}