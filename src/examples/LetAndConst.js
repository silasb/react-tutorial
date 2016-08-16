import React from 'react';
import CodeBlock from '../components/code-blocks'

const LetAndConst = () => (
  <CodeBlock lang="javascript">
{`const func1 = () => {
  let a = 1
  document.write(a * 2)
}
try {
  document.write(a)
} catch(e) { alert(e) }

func1()

// b is hoisted
for(var b = 1; b < 5; b++) {
}
document.write(b)

const hello = 'world'
try {
  hello = '42'
} catch(e) { alert(e) }
`}
  </CodeBlock>
)

LetAndConst.title = "Let And Const"
export default LetAndConst
