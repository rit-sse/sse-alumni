import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
        <div class="masthead clearfix">
            <div class="inner">
                <h3 class="masthead-brand">SSE Alumni Directory</h3>
                <nav class="nav nav-masthead">
                    <NavLink className="nav-link" exact to='/home'>Home</NavLink>
                    <NavLink className="nav-link" exact to='/search'>Search</NavLink>
                    <NavLink className="nav-link" exact to='/login'>Login</NavLink>
                </nav>
            </div>
        </div>
    );
  }
}

export default TopBar;
