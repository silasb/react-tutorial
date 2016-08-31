import React from 'react';
import CodeBlock from '../components/code-blocks'

const StatefulComponent = () => (
  <CodeBlock lang="html">
{`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>
<script src="https://unpkg.com/babel-core@5.8.38/browser.js"></script>

<div id="root"></div>

<script type="text/babel">
  class LikeButton extends React.Component {
    constructor() {
      super()
      this.state = {
        liked: false
      }
      this.boundedHandleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({liked: !this.state.liked})
    }
    render() {
      const text = this.state.liked ? 'liked' : "haven\'t liked"
      return (
        <div onClick={this.boundedHandleClick}>
          You {text} this. Click to toggle.
        </div>
      )
    }
  }

  ReactDOM.render(
    <LikeButton />,
    document.getElementById('root')
  );
</script>
`}
  </CodeBlock>
)

StatefulComponent.title = "Stateful Component"
export default StatefulComponent
