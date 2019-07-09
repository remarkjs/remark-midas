# remark-midas

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to highlight CSS code blocks with [midas][].

## Install

[npm][]:

```sh
npm install remark-midas
```

## Use

Say we have the following file, `example.md`:

````markdown
```css
h1 {
  color: red;
}
```
````

And our script, `example.js`, looks as follows:

```js
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

### `remark().use(midas)`

Highlight CSS code blocks with [midas][].

## Related

*   [`midas`](https://github.com/ben-eb/midas)
    — CSS syntax highlighter
*   [`remark-rehype`](https://github.com/remarkjs/remark-rehype)
    — Transform Markdown to HTML
*   [`remark-highlight.js`](https://github.com/remarkjs/remark-highlight.js)
    — Highlight code with highlight.js (via lowlight)
*   [`remark-tree-sitter`](https://github.com/samlanning/remark-tree-sitter)
    — Highlight code with tree-sitter (rehype compatible)
*   [`remark-code-frontmatter`](https://github.com/samlanning/remark-code-frontmatter)
    — Extract frontmatter from markdown code blocks
*   [`remark-code-extra`](https://github.com/samlanning/remark-code-extra)
    — Add to or transform the HTML output of code blocks (rehype compatible)
*   [`rehype-highlight`](https://github.com/rehypejs/rehype-highlight)
    — [rehype][] plugin to highlight code (via lowlight)
*   [`rehype-prism`](https://github.com/mapbox/rehype-prism)
    — [rehype][] plugin to highlight code (via refractor)
*   [`rehype-shiki`](https://github.com/rsclarke/rehype-shiki)
    — [rehype][] plugin to highlight code with shiki

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Ben Briggs][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/remark-midas/master.svg

[build]: https://travis-ci.org/remarkjs/remark-midas

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-midas.svg

[coverage]: https://codecov.io/github/remarkjs/remark-midas

[downloads-badge]: https://img.shields.io/npm/dm/remark-midas.svg

[downloads]: https://www.npmjs.com/package/remark-midas

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-midas.svg

[size]: https://bundlephobia.com/result?p=remark-midas

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[author]: http://beneb.info

[remark]: https://github.com/remarkjs/remark

[rehype]: https://github.com/rehypejs/rehype

[midas]: https://github.com/ben-eb/midas
