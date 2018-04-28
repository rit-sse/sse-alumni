import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Login extends Component {
  render() {
    return (
        <div className="container">

                <form action="POST" id="login">Login here</form>
                <input type="text"/>
                <br/>
                <br/>
                <a href="/map" class="btn btn-lg btn-secondary">Search</a>
        
        </div>

    );
  }
}

export default Login;
