import React from 'react';
import CodeBlock from '../components/code-blocks'

const ComponentWithJSX = () => (
  <CodeBlock lang="html">
{`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>
<script src="https://npmcdn.com/babel-core@5.8.38/browser.js"></script>

<div id="root"></div>

<script type="text/babel">
  const p = <p>hello</p>

  ReactDOM.render(
    p,
    document.getElementById('root')
  )
</script>
`}
  </CodeBlock>
)

ComponentWithJSX.title = "Component (JSX)"
export default ComponentWithJSX
