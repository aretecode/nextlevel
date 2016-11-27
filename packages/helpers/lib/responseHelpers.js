'use strict';

exports.__esModule = true;
var getResultJSON = function getResultJSON(res, callback) {
  var data = '';
  res.on('data', function (chunk) {
    return data += chunk;
  });
  return res.on('end', function () {
    try {
      return callback(JSON.parse(data));
    } catch (error1) {
      var e = error1;
      return console.log('JSON Error', e.stack, data);
    }
  });
};

var getResultText = function getResultText(res, callback) {
  var data = '';
  res.on('data', function (chunk) {
    return data += chunk;
  });
  return res.on('end', function () {
    return callback(data);
  });
};

exports.default = { getResultJSON: getResultJSON, getResultText: getResultText };
exports.getResultJSON = getResultJSON;
exports.getResultText = getResultText;