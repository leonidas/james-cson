# Synopsis

[![Build Status](https://travis-ci.org/leonidas/james-cson.png)](https://travis-ci.org/leonidas/james-cson)

[CSON](https://github.com/bevry/cson) to JSON transformer for [James.js](https://github.com/leonidas/james.js).

```javascript
var james = require('james'),
    cson  = require('james-cson');

james.task('default', function() {
  james.files('src/**/*.cson').forEach(function(file) {
    james.read(file)
      .transform(cson)
      .write(process.stdout);
  });
});
```

## API

`cson`: Return a new CSON to JSON transformer.
