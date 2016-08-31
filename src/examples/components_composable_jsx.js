import React from 'react';
import CodeBlock from '../components/code-blocks'

const ComponentComposableJSX = () => (
  <CodeBlock lang="html">
{`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>
<script src="https://unpkg.com/babel-core@5.8.38/browser.js"></script>

<div id="root"></div>

<script type="text/babel">

  const Layout = (props) => (
    <div>
      {props.name}
      <PageLink href='https://www.oclc.org' name={props.name} />
    </div>
  )

  const PageLink = ({href, name}) => (
    <a href={href}>{name}</a>
  )

  ReactDOM.render(
    <Layout name='OCLC' />
    , document.getElementById('root')
  )
</script>
`}
  </CodeBlock>
)

ComponentComposableJSX.title = "Composable Components (JSX)"
export default ComponentComposableJSX
