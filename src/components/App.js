import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
                        <Link class="nav-link" to='/home'>Home</Link>
                        <Link class="nav-link" to='/search'>Search</Link>
                        <Link class="nav-link" to='/login'>Login</Link>
                    </nav>
                </div>
            </div>

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
