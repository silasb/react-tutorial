/* global hljs, React */
import React from 'react';
// import hljs from 'hljs';o

import './code-block.css';

import 'prismjs/themes/prism.css';
import prism from 'prismjs';

export default React.createClass({
    displayName: 'CodeBlock',

    propTypes: {
        highlight: React.PropTypes.bool,
        lang     : React.PropTypes.string,
        wrap     : React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {highlight: true};
    },

    shouldComponentUpdate: function (nextProps) {
        // This prevents double syntax highlighting of unchanged content.
        return this.props.children !== nextProps.children;
    },

    render: function () {
        var classNames = this.props.wrap ? 'code code-wrap': 'code';
        var lang       = this.props.highlight ? this.props.lang : 'nohighlight';

        let children;

        if (this.props.highlight) {
          console.log(prism.languages)
          children = prism.highlight(this.props.children, prism.languages[lang])
        } else {
          children = this.props.children
        }

        return (
            <pre className={classNames}>
                <code ref="code" className="codeBlock" dangerouslySetInnerHTML={{__html:children}} />
            </pre>
        );
    }
});
