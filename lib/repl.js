
/**
 * Module dependencies.
 */

var colors = require('colors')
  , _ = require('lodash')
  ;

/**
 * Expose a function that passes in a Vantage
 * object and options.
 */

module.exports = function(vantage, options) {

  vantage
    .mode('repl', 'Enters REPL mode.') 
    .delimiter('repl:')
    .init(function(args, cb){
      this.log("Entering REPL Mode. To exit, type 'exit'.");
      cb();
    })
    .action(function(command, cb) {
      var self = this;
      var globalEval = eval;
      try {
        var res = globalEval(command);
        var log = (_.isString(res)) ? String(res).white : res;
        self.log(log);
        cb(res);
      } catch(e) {
        self.log(e)
        cb(e);
      }
    });

}
  
