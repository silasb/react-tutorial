import React from 'react';

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

  run: function () {
    const iframe = this.refs.iframe
    const iframeWin = iframe.contentWindow

    const type = this.props.lang
    const code = this.code
    const style = '<style>* { font-size: 1.2rem; }</style>'

    if (type === 'javascript') {
      iframeWin.document.body.innerHTML = ''
      iframeWin.eval('(function(){'+code+'})()')
    } else if (type === 'html') {
      iframe.srcdoc = code + style
    }
  },

  clear: function () {
    const iframe = this.refs.iframe

    iframe.srcdoc = ''
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

        <button onClick={this.run}>Run</button>
        <button onClick={this.clear}>Clear</button>

        <hr/>

        <iframe id={lang} className="iframe" ref="iframe" />
      </div>
    );
  }
});
