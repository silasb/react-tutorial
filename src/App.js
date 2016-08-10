import React, { Component } from 'react';
import CodeBlock from './components/code-blocks'
import './App.css';

class App extends Component {
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
console.log('hello')
`}
          </CodeBlock>

          <CodeBlock lang="html">
{`
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.1/immutable.js"></script>
  <script>
    window.hello = function() {
      console.log('hell2')
    }
    console.log('hello')
  </script>

  <p>hello</p>
`}
          </CodeBlock>

        </div>
      </div>
    );
  }
}

export default App;
