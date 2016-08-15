import React from 'react';
import CodeBlock from '../components/code-blocks'

const ComponentWithoutJSX = () => (
  <CodeBlock lang="html">
{`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>

<div id="root"></div>

<script>
  const p = React.createElement('p', null, 'Content')
  ReactDOM.render(
    p,
    document.getElementById('root')
  )
</script>
`}
  </CodeBlock>
)

ComponentWithoutJSX.title = "Component 1"
export default ComponentWithoutJSX
