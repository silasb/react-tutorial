import React from 'react';
import CodeBlock from '../components/code-blocks'

const Classes1 = () => (
  <CodeBlock lang="javascript">
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
)

Classes1.title = "ES6 Classes"
export default Classes1
