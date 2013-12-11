var james = require('james'),
    CSON  = require('cson');

module.exports = function(options) {
  return james.createStream(function(file, callback) {
    callback(JSON.stringify(CSON.parseSync(file)));
  });
}
