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

  run: function (type = 'javascript') {
    const iframe = this.refs.iframe
    const iframeWin = iframe.contentWindow
    const iframeDoc = iframe.contentDocument

    if (type === 'javascript') {
      iframeWin.eval(this.code)
    } else if (type === 'html') {
      iframeDoc.open()
      iframeDoc.write(this.code)
    }

    // eslint-disable-next-line no-eval
    // eval(html)
  },

  render: function () {
    var classNames = this.props.wrap ? 'code code-wrap': 'code';
    var lang       = this.props.highlight ? this.props.lang : 'nohighlight';

    this.code = this.props.children

    let children;

    if (this.props.highlight) {
      children = prism.highlight(this.props.children, prism.languages[lang])
    } else {
      children = this.props.children
    }

    return (
      <div>
        <pre className={classNames}>
          <code ref="code" className="codeBlock" dangerouslySetInnerHTML={{__html:children}} />
        </pre>

        <button onClick={this.run.bind(this, this.props.lang)}>Run</button>

        <hr/>

        <iframe id={lang} className="iframe" ref="iframe"></iframe>
      </div>
    );
  }
});
