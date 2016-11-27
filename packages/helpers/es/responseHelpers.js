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

export default { getResultJSON: getResultJSON, getResultText: getResultText };
export { getResultJSON, getResultText };