'use strict';

import test from 'tape';
import midas from '../';
import mdast from 'mdast';
import html from 'mdast-html';
import {readFileSync as read} from 'fs';
import {join} from 'path';

let base = file => read(join(__dirname, 'fixtures', file), 'utf-8');

test('should highlight css', t => {
    t.plan(1);

    let result = mdast.use([ html, midas ]).process(base('input.md'));
    t.equal(result, base('output.html'));
});

test('should not modify existing htmlAttributes and classes', t => {
    t.plan(2);

    let ast = mdast.parse('```css\nh1{}```', {position: false});
    ast = mdast()
        .use(() => ast => {
            ast.children[0].data = {
                htmlAttributes: {
                    'data-foo': 'bar',
                    class: 'quux'
                }
            };
        })
        .use(midas)
        .run(ast);

    t.equal(ast.children[0].data.htmlAttributes['data-foo'], 'bar');
    t.ok(~ast.children[0].data.htmlAttributes.class.indexOf('quux'));
});
