'use strict';

exports.__esModule = true;

exports.default = function () {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20000;

  console.log('going to exit in... ' + timeout);
  setTimeout(function () {
    console.log('had to exit with timeout');
    process.exit(0);
  }, timeout);
};

module.exports = exports['default'];