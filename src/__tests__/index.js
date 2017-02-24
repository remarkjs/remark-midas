import {readFileSync as read} from 'fs';
import {join} from 'path';
import ava from 'ava';
import remark from 'remark';
import html from 'remark-html';
import midas from '../';

const base = file => read(join(__dirname, 'fixtures', file), 'utf-8');

ava('should highlight css', t => {
    const {contents} = remark().use(html).use(midas).processSync(base('input.md'));
    t.deepEqual(contents, base('output.html'));
});

ava('should not modify existing htmlAttributes and classes', t => {
    let ast = remark().parse('```css\nh1{}\n```');
    ast = remark()
        .use(() => tree => {
            tree.children[0].data = {
                hProperties: {
                    'data-foo': 'bar',
                    class: ['quux'],
                },
            };
        })
        .use(midas)
        .runSync(ast);

    t.deepEqual(ast.children[0].data.hProperties['data-foo'], 'bar');
    t.truthy(~ast.children[0].data.hProperties.class.indexOf('quux'));
});
