# remark-midas

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Chat][chat-badge]][chat]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]

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
const vfile = require('to-vfile')
const report = require('vfile-reporter')
const unified = require('unified')
const markdown = require('remark-parse')
const midas = require('remark-midas')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')

unified()
  .use(markdown)
  .use(midas)
  .use(remark2rehype)
  .use(html)
  .process(vfile.readSync('example.md'), (err, file) => {
    console.error(report(err || file))
    console.log(String(file))
  })
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

[build-badge]: https://img.shields.io/travis/remarkjs/remark-midas.svg

[build]: https://travis-ci.org/remarkjs/remark-midas

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-midas.svg

[coverage]: https://codecov.io/github/remarkjs/remark-midas

[downloads-badge]: https://img.shields.io/npm/dm/remark-midas.svg

[downloads]: https://www.npmjs.com/package/remark-midas

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://beneb.info

[remark]: https://github.com/remarkjs/remark

[midas]: https://github.com/ben-eb/midas
