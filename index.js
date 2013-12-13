var james = require('james'),
    CSON  = require('cson');

module.exports = function(options) {
  return james.createStream(function(file, callback) {
    CSON.parse(file, options, function(err, res) {
      if (err) {
        throw new Error(err);
      }
      callback(JSON.stringify(res));
    });
  });
};
