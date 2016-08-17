import React from 'react';
import CodeBlock from '../components/code-blocks'

const Anonymous = () => (
  <CodeBlock lang="javascript">
{`const func1 = () => {
  return 'hello world'
}

const func2 = () => ({
  key: 'value'
})

const func3 = () => 'hello'

const func4 = (value) => value * 2

const func5 = value => value * -1

document.write(func1())
document.write("<br/>")
document.write(JSON.stringify(func2()))
document.write("<br/>")
document.write(func3())
document.write("<br/>")
document.write(func4(9))
document.write("<br/>")
document.write(func5(9))
`}
  </CodeBlock>
)

Anonymous.title = "ES2015 Anonyous Functions"
export default Anonymous
