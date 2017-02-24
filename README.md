# [remark]-midas [![Build Status](https://travis-ci.org/ben-eb/remark-midas.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/remark-midas.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/remark-midas.svg)][deps]

> Highlight CSS in Markdown files with [midas].


## Install

With [npm](https://npmjs.org/package/remark-midas) do:

```
npm install remark-midas --save
```


## Example

remark-midas is designed to work with [remark-html][html]:

```js
var remark = require('remark');
var html  = require('remark-html');
var midas = require('remark-midas');

var markdown = '```css\nh1 {\n    color: red;\n}\n```\n';
// For remark 4, use `remark.use()` instead of `remark().use()`
var result = remark().use([ html, midas ]).processSync(markdown);
console.log(result);

//=> Compiled HTML with highlighted CSS!
```


## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.


## License

MIT © [Ben Briggs](http://beneb.info)


[ci]:      https://travis-ci.org/ben-eb/remark-midas
[deps]:    https://gemnasium.com/ben-eb/remark-midas
[npm]:     http://badge.fury.io/js/remark-midas
[html]:    https://github.com/wooorm/remark-html
[remark]:  https://github.com/wooorm/remark
[midas]:   https://github.com/ben-eb/midas
