import React from 'react';
import CodeBlock from '../components/code-blocks'

const ES2015ArrayFilter = () => (
  <CodeBlock lang="javascript">
{`const data = [
  { num: 0 },
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
]

const onlyEven = data.filter(f => f.num % 2 == 0)

document.write(JSON.stringify(onlyEven))
`}
  </CodeBlock>
)

ES2015ArrayFilter.title = "ES6 Array Filter"
export default ES2015ArrayFilter
