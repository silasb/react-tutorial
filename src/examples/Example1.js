import React from 'react';
import CodeBlock from '../components/code-blocks'

const Example1 = () => (
  <CodeBlock lang="html">
{`
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.1/immutable.js"></script>
<script>
  window.hello = function() {
  console.log('hell2')
  }
  console.log('hello')
</script>

<p>hello</p>
`}
  </CodeBlock>
)

Example1.title = "Example 1"

export default Example1
