'use strict';

const path = require('path');
const assume = require('assume');
const licenseTree = require('./');

describe('license-tree', function () {
  this.timeout(60 * 1000);

  it('should understand node_modules/async', function (done) {
    licenseTree({ dir: path.join(__dirname, 'node_modules', 'async' )}, function (err, licenses) {
      assume(err).falsy();
      assume(licenses.length).equals(1);
      assume(licenses[0]).is.an('object');
      assume(licenses[0].file).is.a('string');
      assume(licenses[0].license).equals('MIT');
      done();
    });
  });
});
