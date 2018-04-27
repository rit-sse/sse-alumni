import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Login from './Login';
import TopBar from './TopBar';

import ReactDOM from 'react-dom';
// import Root from './index';

/*

window.onload = () => {
  gapi.load('auth2', () => {
    ReactDOM.render(<Root />, document.getElementById('react'));
  });
};

if (module.hot) {
  module.hot.accept('./index', () => {
    const NewRoot = require('./index').default; // eslint-disable-line global-require
    ReactDOM.render(<NewRoot />, document.getElementById('react'));
  });
}

*/

class App extends Component {
  render() {
  
    return (
        <div className="App">

            <TopBar />

            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/search' component={Search}/>
                <Route exact path='/login' component={Login}/>
                <Route path='/' render={() => (<Redirect to="/home"/>)}/>
            </Switch>
        </div>
    );
  }
}

export default App;
