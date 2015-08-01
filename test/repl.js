"use strict";

var assert = require("assert")
  , should = require("should")
  , Vantage = require("vantage")
  , repl = require("./../lib/repl")
  ;

var vantage
  , stdout = ""
  ;

global.foo = "bar";
global.blob = {
  json: { "uncle": "sam", "aunt": "mary" },
  circular: {
    gotcha: void 0,
    innocent: "bystander"
  }
};
global.blob.circular.gotcha = global.blob.circular;

function stdoutFn(data) {
  stdout += data;
  return "";
}

describe("vantage-repl", function() {

  describe("root", function() {

    before("vantage preps", function() {
      vantage = new Vantage().pipe(stdoutFn).show();
    });

    beforeEach("vantage preps", function() {
      stdout = "";
    });

    it("should exist and be a function", function() {
      should.exist(repl);
      repl.should.be.type("function");
    });

    it("should import into Vantage", function() {
      (function(){
        vantage.use(repl);
      }).should.not.throw();
    });

    it("should log into REPL", function(done) {
      vantage.exec("repl", function(err, data){
        should.not.exist(err);
        data.should.containEql("Entering REPL Mode.");
        done();
      });
    });

    it("should execute JS", function(done) {
      vantage.exec("Math.pow(6 * 6, 2);", function(err, data){
        should.not.exist(err);
        data.should.equal(1296);
        done();
      });
    });

    it("should have access to global", function(done) {
      vantage.exec("foo", function(err, data){
        should.not.exist(err);
        data.should.equal("bar");
        done();
      });
    });

    it("should stringify JSON", function(done) {
      vantage.exec("blob.json", function(err){
        should.not.exist(err);
        stdout.replace(/\n/g, "").replace(/\\/g, "").should.equal('{  "uncle": "sam",  "aunt": "mary"}');
        done();
      });
    });

    it("should nail circular references like a boss", function(done) {
      vantage.exec("blob.circular", function(err, data){
        should.not.exist(err);
        done();
      });
    });

  });

});

