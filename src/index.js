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
        data.htmlAttributes = data.htmlAttributes || {};
        data.htmlAttributes.class = [
            data.htmlAttributes.class,
            'midas',
        ].filter(Boolean).join(' ');
    }

    return ast => visit(ast, 'code', visitor);
}
