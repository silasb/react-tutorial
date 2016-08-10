import React, { Component } from 'react';
import { browserHistory } from 'react-router'
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
          <a href="" onClick={this.handleClick.bind(this, 'previous')}>
            <i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
          </a>

          <h2>{title}</h2>

          <a href="" onClick={this.handleClick.bind(this, 'next')}>
            <i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
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
