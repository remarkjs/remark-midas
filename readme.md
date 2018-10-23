# remark-midas [![Build][travis-badge]][travis] [![Coverage][codecov-badge]][codecov] [![Chat][chat-badge]][chat]

Highlight CSS in Markdown files with [midas][] and [remark][].

## Installation

[npm][]:

```bash
npm install remark-midas
```

## Usage

Say we have the following file, `example.md`:

````markdown
```css
h1 {
  color: red;
}
```
````

And our script, `example.js`, looks as follows:

```javascript
var vfile = require('to-vfile');
var report = require('vfile-reporter');
var unified = require('unified');
var markdown = require('remark-parse');
var midas = require('remark-midas');
var remark2rehype = require('remark-rehype');
var html = require('rehype-stringify');

unified()
  .use(markdown)
  .use(midas)
  .use(remark2rehype)
  .use(html)
  .process(vfile.readSync('example.md'), (err, file) => {
    console.error(report(err || file));
    console.log(String(file));
  });
```

Now, running `node example` yields:

```html
example.md: no issues found
<pre><code class="language-css midas"><span class="midas__selector"><span class="midas__tag">h1</span></span> <span class="midas__brace">{</span>
  <span class="midas__property">color</span><span class="midas__colon">: </span><span class="midas__value"><span class="midas__word">red</span></span><span class="midas__semicolon">;</span>
<span class="midas__brace">}</span></code></pre>
```

## API

### `remark.use(midas)`

Highlight code blocks in markdown with a `css` language flag with [midas][].

## Related

*   [`midas`](https://github.com/ben-eb/midas)
    — CSS syntax highlighter
*   [`remark-rehype`](https://github.com/remarkjs/remark-rehype)
    — Transform markdown to HTML
*   [`rehype-highlight`](https://github.com/rehypejs/rehype-highlight)
    — Highlight code blocks with [lowlight](https://github.com/wooorm/lowlight)
*   [`rehype-prism`](https://github.com/mapbox/rehype-prism)
    — Highlight code blocks with [refractor](https://github.com/wooorm/refractor)

## Contribute

See [`contributing.md` in `remarkjs/remark`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Ben Briggs][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/remarkjs/remark-midas.svg

[travis]: https://travis-ci.org/remarkjs/remark-midas

[codecov-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-midas.svg

[codecov]: https://codecov.io/github/remarkjs/remark-midas

[chat-badge]: https://img.shields.io/gitter/room/remarkjs/Lobby.svg

[chat]: https://gitter.im/remarkjs/Lobby

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE-MIT

[author]: http://beneb.info

[remark]: https://github.com/remarkjs/remark

[midas]: https://github.com/ben-eb/midas
