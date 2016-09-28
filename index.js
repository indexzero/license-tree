'use strict';

const fs = require('fs');
const debug = require('diagnostics')('license-tree');
const success = require('diagnostics')('license-tree:found');
const Parser = require('licenses').Parser;
const async = require('async');
const readdir = require('recursive-readdir');

const parse = new Parser();

module.exports = function (opts, callback) {
  let errors = [];

  function checkOne(file, done) {
    module.exports.check(file, function (err, results) {
      if (err) {
        errors.push({ err, file });
      }

      if (results) {
        let result = { license: results[0], file }
        success('License %j', result);
        return done(null, result);
      }

      done();
    });
  }

  readdir(opts.dir, function (err, files) {
    if (err) { return callback(err); }
    async.mapSeries(files, checkOne, function (err, checks) {
      if (err) { return callback(err); }
      callback(null, checks.filter(Boolean));
    });
  });
};

module.exports.check = function check(file, done) {
  debug('Read %s', file);
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) { return done(err); }
    done(null, parse.scan(data));
  });
};
