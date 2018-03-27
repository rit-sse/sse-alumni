import React, { Component } from 'react';
import Home from './Home';
import Search from './Search';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div class="masthead clearfix">
              <div class="inner">
                  <h3 class="masthead-brand">SSE Alumni Directory</h3>
                  <nav class="nav nav-masthead">
                      <a class="nav-link" href="/home">Home</a>
                      <a class="nav-link" href="/search">Search</a>
                      <a class="nav-link" href="/login">Login</a>
                  </nav>
              </div>
          </div>

          <Home />
      </div>
    );
  }
}

export default App;
