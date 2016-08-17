import React from 'react';
import CodeBlock from '../components/code-blocks'

const ES2015ArrayMaps = () => (
  <CodeBlock lang="javascript">
{`const data = [
  1, 2, 3, 4, 5
]

const dataSquared = data.map((m, i) => m * 2)

document.write(dataSquared)
`}
  </CodeBlock>
)

ES2015ArrayMaps.title = "ES2015 Array Maps"
export default ES2015ArrayMaps
