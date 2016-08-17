import React from 'react';
import CodeBlock from '../components/code-blocks'

const ComponentComposable = () => (
  <CodeBlock lang="html">
{`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>

<div id="root"></div>

<script type="text/javascript">

  const Parent = (props) => {
    return React.createElement('div', {style: {color: 'blue'}},
      props.children
    )
  }

  const Child = () => {
    return React.createElement('p', null,
      'hello world'
    )
  }

  ReactDOM.render(
    React.createElement(Parent, {},
      React.createElement(Child)
    ),
    document.getElementById('root')
  )
</script>

`}
  </CodeBlock>
)

ComponentComposable.title = "Composable Components"
export default ComponentComposable
