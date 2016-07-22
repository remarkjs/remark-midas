import Midas from 'midas';
import visit from 'unist-util-visit';

export default function attacher () {
    const midas = new Midas({stringify: false, wrap: false});

    function visitor (node) {
        if (node.lang !== 'css') {
            return;
        }

        let {data} = node;

        if (!data) {
            node.data = data = {};
        }

        data.hChildren = midas.process(node.value).children;
        data.hProperties = data.hProperties || {};
        data.hProperties.className = [
            ...data.hProperties.className || [],
            'language-css',
            'midas',
        ];
    }

    return ast => visit(ast, 'code', visitor);
}
