import React, { Component } from 'react';
import CodeBlock from './components/code-blocks'
import './App.css';


class App extends Component {
  run() {
    const html = this.refs.code.refs.code.innerText

    const iframe = this.refs.iframe.contentWindow
    iframe.eval(html)

    // eslint-disable-next-line no-eval
    // eval(html)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ES6 Classes</h2>
        </div>
        <div className="contents">

          <CodeBlock lang="javascript" ref="code">
{`
class Test {
  constructor() {
    this.test = 'hello'
  }

  hello() {
    return this.test
  }
}

const test = new Test;
document.write(test.hello())
`}
          </CodeBlock>

          <CodeBlock lang="javascript">
{`
puts("hello world")
`}
          </CodeBlock>

          <button onClick={this.run.bind(this)}>Run</button>

          <hr/>

          <iframe className="iframe" ref="iframe"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
