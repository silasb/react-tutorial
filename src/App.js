import React, { Component } from 'react';
import { IndexLink, browserHistory } from 'react-router'
import { nextRoute, previousRoute } from './routes'

import './App.css';

class App extends Component {
  handleClick(direction, e) {
    e.preventDefault()

    const route = direction === 'next' ? nextRoute() : previousRoute()
    if (route) {
      browserHistory.push(route.path)
    }
  }

  render() {
    const title = this.props.children.type.title

    return (
      <div className="App">
        <div className="App-header">
          <IndexLink to='/' style={{float: 'left'}}>H</IndexLink>

          <a href="" onClick={this.handleClick.bind(this, 'previous')}>
            «
          </a>

          <h2>{title}</h2>

          <a href="" title="next" onClick={this.handleClick.bind(this, 'next')}>
            »
          </a>
        </div>
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
