import React from 'react';
import CodeBlock from '../components/code-blocks'

const ObjectDesstruction = () => (
  <CodeBlock lang="javascript">
{`const data = {
  key1: 'key1',
  key2: 'key2',
  key3: 'key3'
}

const {key1} = data /* var key1 = data.key1 */

document.write(key1)
document.write("<br/>")

const func1 = ({key3}) => key3 /* var func1 = function func1(_ref) { var key3 = _ref.key3; return key3 } */
document.write(func1(data))
`}
  </CodeBlock>
)

ObjectDesstruction.title = "Object Destruction"
export default ObjectDesstruction
