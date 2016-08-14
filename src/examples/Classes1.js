import React from 'react';
import CodeBlock from '../components/code-blocks'

const Classes1 = () => (
  <CodeBlock lang="javascript">
{`class Test {
  constructor() {
    this.data = 'hello'
  }

  hello() {
    return this.data
  }
}

const test = new Test;
document.write(test.hello())
`}
  </CodeBlock>
)

Classes1.title = "ES6 Classes"
export default Classes1
