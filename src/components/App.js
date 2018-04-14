import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Login from './Login';
import TopBar from './TopBar';
import Footer from './Footer';

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

            <Footer />
        </div>
    );
  }
}

export default App;
