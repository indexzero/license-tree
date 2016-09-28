# license-tree

Read a tree of files and check for licenses.

## Usage

``` js
const path = require('path');
const licenseTree = require('license-tree');

const checkDir = path.resolve('path', 'to', 'check');

licenseTree({ dir: checkDir }, function (err, licenses) {
  if (err) { throw err; /* handle me */ }

  //
  // Returns the licenses found and the full path of the files
  // they were found in.
  //
  // [{ license: 'MIT', file: 'path/to/check/file/with/MIT/license' }]
  //
  console.dir(licenses);
});
```

## Tests

``` sh
npm test
```

##### Author: [Charlie Robbins](https://github.com/indexzero)
##### LICENSE: MIT
