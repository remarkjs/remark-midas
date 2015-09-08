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
