import React from 'react';
import CodeBlock from '../components/code-blocks'

const BindAndThis = () => (
  <CodeBlock lang="javascript">
{`const obj = { a: 'hello'}
function func1() { document.write(this.a) }
function func2() { document.write(this.a) }

const boundedFunc1 = func1.bind(obj)
boundedFunc1()
document.write('<br/>')
func2()
document.write('<br/>')
func2.call(obj)
`}
  </CodeBlock>
)

BindAndThis.title = "Bind And This"
export default BindAndThis
