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

## Audit trail

If you're concerned with having a log for every file that has been checked, you can run with:

```
DEBUG=license* node your-script-using-license-tree.js
```

This will give you the output from both `license-tree` and [`licenses`](https://github.com/3rd-Eden/licenses) which does all the heavy lifting for parsing and comparison. e.g.:

``` sh
DEBUG=license* npm test
```

```
  licenses::parser had a 1.3513513513513513% match for W3C +0ms
  licenses::parser had a 0% match for WXwindows +0ms
  licenses::parser had a 80% match for Xnet +0ms
  licenses::parser had a 1.4084507042253522% match for ZPL 2.0 +0ms
  licenses::parser had a 32.5% match for Unlicense +1ms
  licenses::parser had a 0% match for WTFPL +0ms
  licenses::parser had a 0% match for zlib/libpng +0ms
license-tree:found License {"license":"MIT","file":"/license-tree/node_modules/async/LICENSE"}
license-tree Read /license-tree/node_modules/async/README.md
  licenses::parser had a 0% match for AFL 2.1 +1ms
  licenses::parser had a 0% match for AFL 3.0 +0ms
  licenses::parser had a 0% match for AGPL 3.0 +0ms
  licenses::parser had a 0.06858710562414265% match for APL 1.0 +1ms
  licenses::parser had a 0% match for Artistic 2.0 +0ms
  licenses::parser had a 0% match for Apache 2.0 +1ms
  licenses::parser had a 0% match for Apple 2.0 +0ms
  licenses::parser had a 0% match for AAL +0ms
  licenses::parser had a 0% match for Apache +0ms
  licenses::parser had a 0% match for Beerware +0ms
  licenses::parser had a 0% match for BSD 2-Clause +0ms
  licenses::parser had a 0% match for BSD 3-Clause +0ms
```

## Tests

``` sh
npm test
```

##### Author: [Charlie Robbins](https://github.com/indexzero)
##### LICENSE: MIT
