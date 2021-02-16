import {readFileSync as read} from 'fs'
import path from 'path'
import test from 'ava'
import remark from 'remark'
import html from 'remark-html'
import midas from '../index.js'

const base = (file) => read(path.join(__dirname, 'fixtures', file), 'utf-8')

test('should highlight css', (t) => {
  t.deepEqual(
    remark().use(html).use(midas).processSync(base('input.md')).toString(),
    base('output.html')
  )
})

test('should not modify existing htmlAttributes and classes', (t) => {
  const tree = remark()
    .use(() => (tree) => {
      tree.children[0].data = {
        hProperties: {
          dataFoo: 'bar',
          className: ['quux']
        }
      }
    })
    .use(midas)
    .runSync(remark().parse('```css\nh1{}\n```'))

  t.is(tree.children[0].data.hProperties.dataFoo, 'bar')
  t.true(tree.children[0].data.hProperties.className.includes('quux'))
})
