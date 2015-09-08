# [mdast]-midas [![Build Status](https://travis-ci.org/ben-eb/mdast-midas.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/mdast-midas.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/mdast-midas.svg)][deps]

> Highlight CSS in Markdown files with [midas].

## Install

With [npm](https://npmjs.org/package/mdast-midas) do:

```
npm install mdast-midas --save
```

## Example

mdast-midas is designed to work with [mdast-html][html]:

```js
var mdast = require('mdast');
var html  = require('mdast-html');
var midas = require('mdast-midas');

var markdown = '```css\nh1 {\n    color: red;\n}\n```\n';
var result = mdast.use([ html, midas ]).process(markdown);
console.log(result);

//=> Compiled HTML with highlighted CSS!
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Ben Briggs](http://beneb.info)

[ci]:      https://travis-ci.org/ben-eb/mdast-midas
[deps]:    https://gemnasium.com/ben-eb/mdast-midas
[npm]:     http://badge.fury.io/js/mdast-midas
[html]:    https://github.com/wooorm/mdast-html
[mdast]:   https://github.com/wooorm/mdast
[midas]:   https://github.com/ben-eb/midas
