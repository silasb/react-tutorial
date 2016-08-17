import React from 'react';
import CodeBlock from '../components/code-blocks'

const ES2015ArrayFind = () => (
  <CodeBlock lang="javascript">
{`const data = [
  { num: 0 },
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
]

const onlyThree  = data.find(f => f.num === 3)

document.write(JSON.stringify(onlyThree))
`}
  </CodeBlock>
)

ES2015ArrayFind.title = "ES2015 Array Find"
export default ES2015ArrayFind
