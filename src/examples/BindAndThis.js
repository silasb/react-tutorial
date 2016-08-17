import React from 'react';
import CodeBlock from '../components/code-blocks'

const BindAndThis = () => (
  <CodeBlock lang="javascript">
{`const obj = { a: 'hello' }
window.a = 'ROAR'
function func1() { document.write(this.a) }
function func2() { document.write(this.a) }

const boundedFunc1 = func1.bind(obj)
boundedFunc1()
document.write('<br/>')
func2()
document.write('<br/>')
`}
  </CodeBlock>
)

BindAndThis.title = "Bind And This"
export default BindAndThis
