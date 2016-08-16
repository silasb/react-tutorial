import React from 'react';
import CodeBlock from '../components/code-blocks'

const ObjectDesstruction = () => (
  <CodeBlock lang="javascript">
{`const data = {
  key1: 'key1',
  key2: 'key2',
  key3: 'key3'
}

const {key1} = data
const func1 = ({importantKey}) => importantKey

document.write(key1)
document.write("<br/>")
document.write(func1({
  key1: 'key1',
  importantKey: 'importantKey'
}))
`}
  </CodeBlock>
)

ObjectDesstruction.title = "Object Destruction"
export default ObjectDesstruction
