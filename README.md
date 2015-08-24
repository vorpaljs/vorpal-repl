# vorpal-repl

[![Build Status](https://travis-ci.org/vorpaljs/vorpal-repl.svg)](https://travis-ci.org/vorpaljs/vorpal-repl)

REPL extension for [Vorpal.js](https://github.com/dthree/vorpal). Installs the `repl` command, which drops you into a REPL session within the context of the application. Built in to Vantage.js by default.

##### Installation

```bash
npm install vorpal-repl
npm install vorpal
```

##### Programmatic use

```js
// index.js
const Vorpal = require('vorpal');
const repl = require('vorpal-repl');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(repl)
  .show();
```

### License

MIT

