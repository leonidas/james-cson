var assert = require('assert'),
    stream = require('readable-stream'),
    cson   = require('../index.js');

describe('james-cson', function() {

  it('should return CSON to JSON transformation stream', function(done){
    var src  = new stream.PassThrough(),
        dest = new stream.PassThrough();

    src.pipe(cson()).pipe(dest);
    src.write("{module:\n  name: \"james-cson\"\n  version: \"0.1.0\"}");
    src.end();

    dest.on('finish', function() {
      assert.equal(dest.read().toString(), '{"module":{"name":"james-cson","version":"0.1.0"}}');
      done();
    });
  });
});
