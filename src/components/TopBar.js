import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
        <div className="masthead">
            <div className="inner">
                <h3 className="masthead-brand">SSE Alumni Directory</h3>
                <nav className="nav nav-masthead">
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
