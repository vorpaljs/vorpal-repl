# vorpal-repl

<img src="https://travis-ci.org/vorpaljs/vorpal-repl.svg" alt="Build Status" />

REPL extension for [Vorpal.js](https://. Installs the `repl` command, which drops you into a REPL session within the context of the application. Built in to Vantage.js by default.

##### Installation

```bash
npm install vorpal-repl
npm install vorpal
```

##### Programmatic use

```js
// index.js
var Vorpal = require('vorpal')
  , repl = require('vorpal-repl)
  ;

var vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(repl)
  .show();
``

### License

MIT

