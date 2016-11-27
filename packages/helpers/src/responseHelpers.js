const getResultJSON: ResponseHelper = function(res, callback) {
  let data = ''
  res.on('data', function(chunk) {
    return data += chunk
  })
  return res.on('end', function() {
    try {
      return callback(JSON.parse(data))
    } catch (error1) {
      var e = error1
      return console.log('JSON Error', e.stack, data)
    }
  })
}

const getResultText: ResponseHelper = function(res, callback) {
  let data = ''
  res.on('data', function(chunk) {
    return data += chunk
  })
  return res.on('end', function() {
    return callback(data)
  })
}

export default {getResultJSON, getResultText}
export {getResultJSON, getResultText}
