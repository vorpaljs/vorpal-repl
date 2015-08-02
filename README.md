# vantage-repl

<img src="https://travis-ci.org/vantagejs/vantage-repl.svg" alt="Build Status" />

Simple REPL extension for vantage.js

##### Installation

```bash
npm install vantage-repl
npm install vantage
```

##### Programmatic use

```js
// index.js
var Vantage = require('vantage')
  , repl = require('vantage-repl)
  ;

var vantage = Vantage();

vantage
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
$ vantage 192.168.0.100:4000
websvr~$ 
websvr~$ use vantage-repl
Successfully installed vantage-repl
websvr~$ 
websvr~$ repl
Entering REPL Mode. To exit, type 'exit'.
websvr~$ repl:
websvr~$ repl: 6 * 6
32
websvr~$ repl: exit
websvr~$
```
