'use strict';

require('assert');

var should = require('should');
var Vantage = require('vorpal');
var repl = require('./../lib/repl');

var vorpal;
var stdout = '';

global.foo = 'bar';
global.blob = {
  json: {'uncle': 'sam', 'aunt': 'mary'},
  circular: {
    gotcha: undefined,
    innocent: 'bystander'
  }
};
global.blob.circular.gotcha = global.blob.circular;

function stdoutFn(data) {
  stdout += data;
  return '';
}

describe('vorpal-repl', function () {
  describe('root', function () {
    before('vorpal preps', function () {
      vorpal = new Vantage().pipe(stdoutFn).show();
    });

    beforeEach('vorpal preps', function () {
      stdout = '';
    });

    it('should exist and be a function', function () {
      should.exist(repl);
      repl.should.be.type('function');
    });

    it('should import into Vantage', function () {
      (function () {
        vorpal.use(repl);
      }).should.not.throw();
    });

    it('should log into REPL', function (done) {
      vorpal.exec('repl', function (err, data) {
        should.not.exist(err);
        data.should.containEql('Entering REPL Mode.');
        done();
      });
    });

    it('should execute JS', function (done) {
      vorpal.exec('Math.pow(6 * 6, 2);', function (err, data) {
        should.not.exist(err);
        data.should.equal(1296);
        done();
      });
    });

    it('should have access to global', function (done) {
      vorpal.exec('foo', function (err, data) {
        should.not.exist(err);
        data.should.equal('bar');
        done();
      });
    });

    it('should stringify JSON', function (done) {
      vorpal.exec('blob.json', function (err) {
        should.not.exist(err);
        stdout.replace(/\n/g, '').replace(/\\/g, '').should.equal('{  "uncle": "sam",  "aunt": "mary"}');
        done();
      });
    });

    it('should nail circular references like a boss', function (done) {
      vorpal.exec('blob.circular', function (err) {
        should.not.exist(err);
        done();
      });
    });
  });
});

