'use strict';

import midas from 'midas';
import visit from 'unist-util-visit';

export default function attacher () {
    function visitor (node) {
        if (node.lang !== 'css') {
            return;
        }

        let data = node.data;

        if (!data) {
            node.data = data = {};
        }

        data.htmlContent = midas(node.value, {wrap: false});
        data.htmlAttributes = {'class': 'language-css midas'};
    }

    return ast => visit(ast, 'code', visitor);
}
