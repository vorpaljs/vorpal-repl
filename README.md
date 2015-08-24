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
```

```bash
$
$ node index.js
node~$ 
node~$ repl
Entering REPL Mode. To exit, type 'exit'.
node~$ repl:
node~$ repl: 6 * 6
32
node~$ repl: exit
node~$
```

##### Realtime use

```bash
$
$ vorpal 192.168.0.100:4000
websvr~$ 
websvr~$ use vorpal-repl
Successfully installed vorpal-repl
websvr~$ 
websvr~$ repl
Entering REPL Mode. To exit, type 'exit'.
websvr~$ repl:
websvr~$ repl: 6 * 6
32
websvr~$ repl: exit
websvr~$
```
